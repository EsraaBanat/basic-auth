'use strict';

const base64=require('base-64');
const bcrypt=require('bcrypt');

module.exports = (Users) => async (req, res, next) => {
    
    if (req.headers.authorization) {
        
        let header=req.headers.authorization.split(' ');
        let encoded=header.pop();
        let decode= base64.decode(encoded);
        let [username,password]=decode.split(':');

        try{
            const user = await Users.findOne({ where: { username: username } });
            console.log(user.password);
            const valid=await bcrypt.compare(password,user.password);
            if (valid) {
                req.user = user;
                 next();
            } else {
               next(new Error('Invalid Password '))
            }
        }catch (error) {next(new Error("Invalid Login mostly No user matching " + error))}
    }
}




