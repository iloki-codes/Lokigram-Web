import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import AuthRoles from '../utils/authRoles';
import JWT from 'jsonwebtoken';
import config from '../config';
import crypto from 'crypto';    // inbuilt in nodejs


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
    }, {
        timestamps: true
    } )

    // installed bcrypt

    userSchema.pre("save", async function(next) {                                     // hooks // just like triggers in sql
                                    if(!this.isModified("password"))
                                    return next();                       //middleware // a flag // stopped in b/w // releasing it after
                                    this.password = await bcrypt.hash(this.password, 10);   // hashing with salt value
                                }
    ),

    userSchema.methods = {
        comparePassword: async function(enteredPassword) {
            return await bcrypt.compare(enteredPassword, this.password)
        },

        // installed json web token
    
        getJWTTOKEN: function(){
            JWT.sign( {             // it hids the payload
                _id: this._id,      // unique mapping key // mongoose creates doc _id whenever you save any info in db
                role: this.role,
            },
            config.JWT_SECRET,
            {
                expiresIn: config.JWT_EXPIRY
            } )
        },
    
        generateForgotPasswordToken: function() {
            const forgotToken = crypto.randomBytes(20).toString("hex");

            this.forgotPasswordToken = crypto                                          // encrypting token as well // optional
                                            .createHash("sha256")
                                            .update(forgotToken)
                                            .digest("hex")

           this.forgotPasswordExpiry = Date.now() + 20*60*1000;

            return forgotToken;
        }

        // phase three done 

    }


export default mongoose.model("User", userSchema);