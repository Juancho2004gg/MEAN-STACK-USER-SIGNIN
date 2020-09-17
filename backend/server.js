const server = async ({ app, mongoose, loaders, routes, controllers }) => {
    
    // Inyected controllers
    const { handlersControllers }  = await loaders({ app, mongoose, controllers })

    await routes({ app, handlersControllers })

    const port  = 3000;

    app.listen( port , err => {
            if (err) {
            console.log(err);
            return;
            }
            console.log(`Your server is ready on port ${ port }!`);
        });
    }

module.exports = server