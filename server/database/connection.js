const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        //const con = await mongoose.connect(process.env.MONGO_URI, {
        const con = await mongoose.connect("mongodb+srv://admin:admin@cluster0.xs7l3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB