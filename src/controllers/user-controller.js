'use strict'

const repository = require('../repositories/user-repository');
const md5 = require('md5');

exports.post = async(req, res, next) => {
    console.log(req.body)
    try {
       
        await repository.create({
           firstname: req.body.firstname,
           lastname: req.body.lastname,
           email: req.body.email,
           nickname: req.body.nickname,
           password: md5(req.body.firstname + global.SALT_KEY),
           roles: ['user'],
        });
        res.status(201).send({ message : 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).send({ message: 'Falha ao processar sua requisição.' + error });
    }
}