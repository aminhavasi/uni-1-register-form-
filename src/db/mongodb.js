const mongoose = require('mongoose');

const mongoDb = () => {
    mongoose.connect(
        process.env.URI,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) console.log(err);
        }
    );
};

module.exports = { mongoDb };
