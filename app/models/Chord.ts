import mongoose from "mongoose";

const GuitarSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Please provide a name'] 
    },
    strings: {
        type: Number,
        required: [true, 'Please provide a number of strings'],
    },
    frets: {
        type: [Number],
        required: [true, 'Please provide a number of frets'],
    },
    tuning: {
        type: String,
        required: [true, 'Please provide a tuning'],
    }
}

)