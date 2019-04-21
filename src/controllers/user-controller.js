'use strict'

const repository = require('../repositories/user-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.post = async(req, res, next) => {
    try {
       
        await repository.create({
           firstname: req.body.firstname,
           lastname: req.body.lastname,
           email: req.body.email,
           nickname: req.body.nickname,
           password: md5(req.body.password + global.SALT_KEY),
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

exports.authenticate = async(req, res, next) => {
    try {

        const user = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if (!user) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            id: user._id,
            email: user.email,
            fistname: user.firstname,
            nickname: user.nickname
        });

        res.status(201).send({
            token: token,
            data: {
                email: user.email,
                fristname: user.firstname
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição' + e
        });
    }
};