module.exports = function(application) {
	application.get('/noticia', function(req, res){
        var connection = application.config.dbConnection();
        var noticiaModel = application.app.models.noticiaModel;

        noticiaModel.getNoticia(connection, function(error, result){			
			res.render("noticias/noticia" , {noticia : result});
		});
	});
};