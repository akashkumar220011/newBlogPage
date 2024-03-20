


import mongoose from "mongoose";
export const connectMongoose = (username, password) => {
    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.bsa8hal.mongodb.net/`)
    .then((e) => console.log(`Connected to Mongodb: ${e.connection.host}`))
    .catch((e) => console.log(e));
};

