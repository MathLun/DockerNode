const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const mongooseConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI,  mongooseOptions);
    } catch(err) {
        throw err;
    }
};

module.exports = { mongooseConnection };