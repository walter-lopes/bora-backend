'use strict'

const repository = require('../repositories/user-repository');
const md5 = require('md5');
const authService = require('../services/auth-service')

exports.post = async(req, res, next) => {
    try {
       
        await repository.create({
           firstname: req.body.firstname,
           lastname: req.body.lastname,
           email: req.body.email,
           nickname: req.body.nickname,
           password: md5(req.body.firstname + global.SALT_KEY),
           roles: ['user'],
        });

        const token = await authService.generateToken({ 
            firstname: req.body.firstname,
            email: req.body.email,
            roles: ['user'] });

        res.status(201).send({ 
            token: token,
            message : 'Usuário cadastrado com sucesso!' 
        });
    } catch (error) {
        res.status(500).send({ message: 'Falha ao processar sua requisição.' + error });
    }
}