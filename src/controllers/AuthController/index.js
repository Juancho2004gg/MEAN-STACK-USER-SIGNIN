
const Auths = ({jwt,app})=>{

login: async(req,res)=>{
    const {email,password} = req.body;
    
    console.log('consultando login');

    if(email === '' || password === ''){res.status(411).end()}

    let result
        try {
        result = await mongodb.db('users')
            .collection('users')
            .findOne({ email, password })
        } catch (error) {
            console.log('Error')
            res.send(411).end()
                return
    }
    if(!result){
        res.send(403).end()
            return
    }
    if(email === result.email && password === result.password){
        const payload = {
            check : true
        };
    
            const token = jwt.sign(payload, app.get('llave'),{
                expiresIn : 1440 
            });
    
        res.status(200).json({
            mensaje: "Autenticación correcta",
            email : result.email,
            firstName : result.firstName,
            refferer_code : result.refferer_code,
        token,
            rol : result.rol
        });
    }
    else { 
        res.status(411).end()
    } 
   

    
    }

}

module.exports = Auths;