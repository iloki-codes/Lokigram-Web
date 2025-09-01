const { default: mongoose, Types, ObjectId } = require('mongoose');
const Conversations = require('../models/conversation.schema.js');
const Messages = require('../models/message.schema.js');

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const messageCtrl = {
    createMessage: async (req, res) => {
        try {
            const { sender, recipient, text, call, media: images } = req.body;
            // const { media: images } = req.files || [];

            if(!recipient || (!text.trim() && media.length === 0 && !call)) return;

            const newConversation = await Conversations.findOneAndUpdate({
                $or: [
                    {recipients: [sender, recipient]},
                    {recipients: [recipient, sender]}
                ]
            }, {
                recipients: [sender, recipient],
                text,
                images,                                 //: images?.path,
                call
            }, {
                new: true,
                upsert: true
            })

            const newMessage = new Messages({
                conversation: newConversation._id,
                sender,
                call,
                recipient,
                text,
                images                                  //: images?.path,
            })

            await newMessage.save();

            res.json({msg: 'Msg Created Successfully!'});

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getConversations: async (req, res) => {
        try {
            const features = new APIfeatures(Conversations.find({
                recipients: req.user._id
            }), req.query).paginating()

            const conversations = await features.query.sort('-updatedAt')
            .populate('recipients', 'avatar username fullname')

            res.json({
                conversations,
                result: conversations.length
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getMessages: async (req, res) => {
        try {
            const features = new APIfeatures(Messages.find({
                $or: [
                    {sender: req.user._id, recipient: req.params.id},
                    {sender: req.params.id, recipient: req.user._id}
                ]
            }), req.query).paginating()

            const messages = await features.query.sort('-createdAt')

            res.json({
                messages,
                result: messages.length
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteMessages: async (req, res) => {
        try {
            await Messages.findOneAndDelete({_id: req.params.id, sender: req.user._id})
            res.json({msg: 'Message Deleted!'})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteConversation: async (req, res) => {
        try {
            const userId = req.user._id;
            const paramsId = req.params.id;

            if(paramsId && userId !== mongoose.Types.ObjectId) {
                mongoose.Types.ObjectId.isValid(userId);
                mongoose.Types.ObjectId.isValid(paramsId); // error
            }
            const newConver = await Conversations.findOneAndDelete({
                $or: [
                    {recipients: [userId, paramsId]},
                    {recipients: [paramsId, userId]}
                ]
            });
            await Messages.deleteMany({conversation: newConver._id});

            res.json({msg: 'Conversation Deleted Successfully!'});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
}


module.exports = messageCtrl