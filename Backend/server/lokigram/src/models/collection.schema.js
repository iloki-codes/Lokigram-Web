import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: ["true", "Please provide a note name"],
            trim: true,
            maxLength: [
                120,
                "Notes name should not be more than 120 characters"
            ]
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Note", notesSchema)

//superpower of mongoose data object into data object