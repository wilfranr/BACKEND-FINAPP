//decimo: importar dependencias que se van a usar en la autenticacion
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const msg = require('../helpers/messages')

//undecimo: instanciar autenticacion
const authService = {
    singToken: async function(_id){
        return jwt.sing({ _id }, process.env.JWT_SECRET, {
            espiresIn: 60 * 60 * 24 * 365       
        })
    },
    //login verificando si el usuario existe
    login: async function(data) {
        try {
            const {email, password} = data
            let userExists = await User.findOne({email:email}, 'name email password').exec()
            if(await bcrypt.compare(password, userExists.password).then(res=>req)){
                const token = await this.singToken(userExists.id)
                return {
                    user: userExists,   
                    code: 200,
                    token
                }
            }else{
                return msg.authFailed
            }
        }catch (error){
            return error
        }
    },

    //registro de usuario con encriptacion bcrypt
    register: async function(userData){
        try {//acá se encrypta la contraseña
            let hash = await bcrypt.hash(userData.password, 10).then(res => res)
            userData.password = hash
            await userData.save()//acá se guarda el usuario
            let token = await this.singToken(userData._id)
            return {
                userData,
                code: 200,
                token
            }
        } catch (error) {
            return error
        }
    }
}
module.exports = authService