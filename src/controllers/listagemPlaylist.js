const db = require("../config/database");

exports.listagemPlaylist = async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const idPlaylist = parseInt(req.params.idPlaylist);
    const response = await db.query('SELECT * FROM Playlists WHERE id_usuario = $1 AND id_playlist = $2', [idUsuario, idPlaylist]);
    res.status(200).send(response.rows);
};

exports.inserirItem = async (req, res) => {
    const idMedia = parseInt(req.params.idMedia);
    const rows = await db.query("INSERT INTO Playlists (id_media) VALUES ($1)", [idMedia]);

    res.status(201).send({
        message: "Item added successfully!"
    });
};