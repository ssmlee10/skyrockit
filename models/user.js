const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    company: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    notes: {
        type: String,
    },
    postingLink: {
        type: String,
    },
    status: {
        type: String,
        enum: ['interested', 'applied', 'interviewing', 'rejected', 'accepted'],
        required: true,
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    //nested association
    applications: [applicationSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;