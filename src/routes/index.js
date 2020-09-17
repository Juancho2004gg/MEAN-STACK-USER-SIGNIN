  
const routes = ({ app, handlersControllers }) => {

    const { AuthController, TestController } = handlersControllers
    
    app.get( '/api/welcome', TestController.sayWelcome)

}

module.exports = routes;