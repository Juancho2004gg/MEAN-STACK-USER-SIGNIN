const controllers = require('../controllers');

const controllersLoader = async({mongoose}) =>{
    const controllers_keys= Object.keys(controllers)
    let inyected_controllers={};

    await controllers_keys.forEach(control=>{
        inyected_controllers[control]=controllers_keys[control]
    })
    console.log(inyected_controllers)
}
module.exports = controllersLoader;