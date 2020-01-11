const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TransactionSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
    }

});

const Transaction = mongoose.model('transaction', TransactionSchema);

module.exports = Transaction;