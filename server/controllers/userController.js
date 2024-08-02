const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models')

const generateJwt = (id, telegramId, username, role) =>{
    return jwt.sign({id, telegramId, username, role},
        process.env.SECRET_KEY,
        {expiresIn: '5h'});
}

class userController {
    async registration(req, res, next){
        const {telegramID, username, role} = req.body;

        if(!telegramID){
            return next(ApiError.badRequest("Не обнаружен telegramId"))
        }

        const candidate = await User.findOne({where: {telegramID}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким telegramId уже существует'))
        } else {
            const candidate = await User.findOne({where: {username}});
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким userName уже существует'))
            }  else {

        const user = await User.create({telegramID, username, role});

        const token = generateJwt(user.id, user.telegramID, user.username, user.role);
        return res.json({token});
            }
    }

    }



    async login(req, res, next){
       const {telegramID} = req.body;
       const user = await User.findOne({where: {telegramID}}) 
        if(!user){
            return next(ApiError.internal("Пользователь с таким TelegramId не обнаружен"))
        }
        const token = generateJwt(user.id, user.telegramID, user.username, user.role);
        return res.json({token});
    }


    async check(req, res, next) {
        try{
            const token = generateJwt(req.user.id, req.user.telegramID, req.user.username, req.user.role)
            return res.json({token})
        } catch(e) {
            res.status(401).json({message: "Токена нет"})
        }
    }
}

module.exports = new userController()