const uuid = require('uuid');
const path = require('path');
const fileUpload = require('express-fileupload');
const {Task} = require('../models/models');
const ApiError = require('../error/ApiError')

class taskController {
    async create(req, res, next){

        try{
            const {title, description, shortDescription, link, price} = req.body
            const {image} = req.files;
            let fileName = uuid.v4() + ".jpeg";
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const task = await Task.create({title, description, shortDescription, link, price, image:fileName})
    
            return res.json(task)
        }catch(e){
            next(ApiError.badRequest(e.message))

        }
        
    }


    async getAll(req, res){
        let {limit, page} = req.query;

        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        
        let tasks;
        tasks = await Task.findAndCountAll({limit, offset});

        return res.json(tasks);
    }



    async getOne(req, res){
        const {id} = req.params;
        const task = await Task.findOne(
            {
            where: {id},
            },
        )

        return res.json(task);
    }

}

module.exports = new taskController()