const expressLoader     =   require('./expressLoader');
const mongooseLoader    =   require('./mongooseLoader');
const controllersLoader =   require('./controllersLoader');
const multerLoader      =   require('./multerLoader');

 const loader = async ({ app, mongoose }) => {
    
    await expressLoader({ app })
    await mongooseLoader({ mongoose })
    await multerLoader({ multer })
    
    const handlersControllers = await controllersLoader({ mongoose })

    return {
        handlersControllers
    }

}

module.exports = loader