const Notifies = require('../models/notify.schema.js');

const notifyCtrl = {
    createNotify: async (req, res) => {
        try {
            const { id, recipients, url, text, content, images } = req.body;
            // const { images } = req.file || "";

            if (!recipients || recipients.length === 0) return;

            if(recipients.some(r => r.toString() === req.user._id.toString())) return;
            //    .includes(req.user._id.toString())) return;

            const notify = new Notifies({
                id,
                recipients,
                url,
                text,
                content,
                images,                             //: images?.path,
                user: req.user._id
            })

            await notify.save();
            return res.json({notify});
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    removeNotify: async (req, res) => {
        try {
            const notify = await Notifies.findOneAndDelete({
                id: req.params.id,
                ...(req.query.url && { url: req.query.url })              //url: req.query.url
            });

            return res.json({
                msg: "Notification Deleted!"
            });
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getNotifies: async (req, res) => {
        try {
            const notifies = await Notifies.find({recipients: req.user._id})
            .sort('-createdAt').populate('user', 'avatar username')

            return res.json({notifies})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    isReadNotify: async (req, res) => {
        try {
            const notifies = await Notifies.findOneAndUpdate(
                {_id: req.params.id},
                {isRead: true},
                {new: true}
            )

            return res.json({notifies});
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteAllNotify: async (req, res) => {
        try {
            const notifies = await Notifies.deleteMany({  recipients: req.user._id });

            return res.json({notifies})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}


module.exports = notifyCtrl;