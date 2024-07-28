// const mongoose = require('mongoose')

// const mongoURI = "mongodb://127.0.0.1:27017/iNotebook.iNotebook";
// const port = 8000;

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log('Connected to Mongo Successfully');
//     })
// }

// module.exports= connectToMongo;

const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";
const port = 8000;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB Successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectToMongo;