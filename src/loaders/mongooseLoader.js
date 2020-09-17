const mongooseLoader = async ({mongoose}) => {

    const db_options = {
        useNewUrlParser:true,
        useUnifiedTopology:true, 
        useCreateIndex:true
    };
    
    try{
        if(await mongoose.connect(process.env.MONGODB_URI,
        db_options));
        console.log('db is connected');
    }
    catch(error){
        console.log(error)
    }

}; 

module.exports = mongooseLoader;