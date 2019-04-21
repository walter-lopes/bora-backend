'use-strict'
const repository = require('../repositories/bora-repository');
const authService = require('../services/auth-service');

exports.post = async(req, res, next) => {
    try {
        const token = req.body.token || req.headers['Bearer']

        const data = authService.decodeToken(token);

        await repository.create(
           title = req.body.title,
           description = req.body.description,
           owner = data.id,
           location = req.body.address
        );

        res.status(201).send({ 
            message : 'BORA registrado com sucesso!' 
        });
        
    } catch (error) {
        res.status(500).send({ message: 'Falha ao processar sua requisição.' + error });
    }
}

exports.include = async(req, res, next) => {
    try {
        await repository.includeParticipants(req.params.id, req.body);

        res.status(200).send({
            message: 'Participante incluido no BORA com sucesso.'
        });
    } catch (error) {
        res.status(500).send({ message: 'Falha ao processar sua requisição.' + error });
    }
} 

exports.get = async(req, res, next) => {
    try {
        boras = await repository.get();

        res.status(200).send({
            data = boras
        });
    } catch (error) {
        res.status(500).send({ message: 'Falha ao processar sua requisição' + error });
    }
}