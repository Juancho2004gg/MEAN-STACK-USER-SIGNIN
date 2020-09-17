const controllersLoader = require('./controllersLoader');
const mongooseLoader = require('./mongooseLoader');
const expressLoader  = require('./expressLoader');

const loader = async({app,mongoose}) => {
    await expressLoader({app});
    await mongooseLoader({mongoose});
    
    const handlerController = await controllersLoader({mongoose})
    return {
        handlerController
    }

}

module.exports = loader;
