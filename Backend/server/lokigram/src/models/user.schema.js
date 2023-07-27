import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: ["true", "Name is required"],
            maxLength: [50, "Name should be less than 50 characters"]
        },
        email: {
            type: String,
            required: ["true", "Email is needed"],
        },
        password: {
            type: String,
            required: ["true", "Please create a Password"],
            minLength: [8, "Password must be atleast eight characters"],
            select: false          // it means this data will not be taken into database by default *but you can bring it ** but do not !
        },
        role: {
            type: String,
            enum: Object.values(AuthRoles),   // restricting user's options: gives an array
            default: AuthRoles.USER
        },
        forgotPasswordToken: String,
        forgotPasswordExpiry: Date
    }
)