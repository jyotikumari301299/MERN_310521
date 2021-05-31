const mongoose =  require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log("CONNECTED TO DB");})
    .catch((err)=>console.log('not connected to DB',err));