import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
        },
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            unique: true,
            match: [
                /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                'Please provide a valid email',
            ],
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
            minlength: 6,
            select: false,
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// Hash user password
UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        // @ts-ignore
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// Custom method to compare and validate password for logging in
UserSchema.methods.isCorrectPassword = async function (password: string) {
    return bcrypt.compare(password, this.password);
};

export default mongoose.models.User || mongoose.model('User', UserSchema);