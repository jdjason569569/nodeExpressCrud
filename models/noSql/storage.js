const mongoose = require('mongoose');
const StorageSchema = new mongoose.Schema({
    url: {
        type: String
    },
    filename: {
        type: Number
    }
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('storages', StorageSchema);