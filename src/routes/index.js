
const routes = ({ app, handlerController }) => {
    
    const { AuthController } = handlerController;

    app.get('/api/login', (req,res)=> {
        console.log('hola')
    })

}

module.exports = routes;