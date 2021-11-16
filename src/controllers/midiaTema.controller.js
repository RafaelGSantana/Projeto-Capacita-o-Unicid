const { Midia } = require('../models');
const { Tema } = require('../models');
const { MidiaTema } = require('../models');


const addTemaMidia = async (request,response) => { // Adicionar um tema para uma mídia

    try {
        const insereTema = await MidiaTema.create({
            id_midia: request.body.id_midia,
            id_tema: request.body.id_tema
        });

        return response.status(200).json({status: true, message: "Tema adicionado à mídia com sucesso"});
    } catch(error) {
        return response.status(400).json({ error: true, errorMessage: error.message })
    }
};


const deleteTemaMidia = async (request,response) => { // xxx

    try {
        const insereTema = await MidiaTema.destroy({where: {
            id_midia: request.body.id_midia,
            id_tema: request.body.id_tema
        }
        });

        return response.status(200).json({status: true, message: "Mídia excluída do tema com sucesso"});
    } catch(error) {
        return response.status(400).json({ error: true, errorMessage: error.message })
    }
};



const getAll = async (request, response) => { // Listar todos os aúdios por temas
    
    try {
        const listagemAudioTema = await Tema.findAll({
                include: [
                    {
                        model: Midia,
                        attributes: ['id_midia', 'nome', 'media_type']
                    }
                ]
            });
            
        if (listagemAudioTema == null) {
            return response.status(404).json({ 
                error: true, 
                errorMessage: 'Recurso não encontrado', 
                path: request.originalUrl })
        }

        const responseListagemAudioTemas = {
            listagemAudioTema
        }

        return response.status(200).json(responseListagemAudioTemas);
    } catch (error) {
        return response.status(400).json({ error: true, errorMessage: error.message })
    }
};

const getById = async (request, response) => { // Listar aúdios por temas

    try {
        const listagemAudioTemaId = await Tema.findByPk(request.params.id,
            {
                include: [
                    {
                        model: Midia,
                        attributes: ['id_midia', 'nome', 'media_type']
                    }
                ]
            });
            
        if (listagemAudioTemaId == null) {
            return response.status(404).json({ 
                error: true, 
                errorMessage: 'Recurso não encontrado', 
                path: request.originalUrl })
        }

        const responseListagemAudioTemasId = {
            listagemAudioTemaId
        }

        return response.status(200).json(responseListagemAudioTemasId);
    } catch (error) {
        return response.status(400).json({ error: true, errorMessage: error.message })
    }
};

module.exports = { addTemaMidia, deleteTemaMidia, getAll, getById }