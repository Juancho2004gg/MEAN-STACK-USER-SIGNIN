  
const routes = ({ app, handlersControllers }) => {

    const { AuthController, TestController } = handlersControllers;
    
    app.get( '/api/welcome', TestController.sayWelcome);
    app.post( '/api/login', AuthController.login);
    app.post( '/api/register', AuthController.register);

}

module.exports = routes;