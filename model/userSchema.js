const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true, // Removes whitespace from both ends
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true, // Converts email to lowercase
    },
    password: {
        type: String,
        required: true,
    }
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
