'use-strict'
const repository = require('../repositories/bora-repository');

exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);

        res.status(201).send({ 
            message : 'Parabéns BORA registrado com sucesso!' 
        });
        
    } catch (error) {
        res.status(500).send({ message: 'Falha ao processar sua requisição.' + error });
    }
}