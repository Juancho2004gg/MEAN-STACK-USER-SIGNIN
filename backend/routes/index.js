  
const routes = ({ app, handlersControllers }) => {

    const { AuthController, TestController } = handlersControllers;
    
    app.get( '/api/welcome', TestController.sayWelcome);
    app.post( '/api/auth', AuthController.login);
    app.put( '/api/auth', AuthController.register);

}

module.exports = routes;