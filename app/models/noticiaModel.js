module.exports = function(){

    this.getNoticia = function(connection, callback){
        connection.query('SELECT * FROM noticias where id_noticia = 1', callback);
    }

    return this;
}