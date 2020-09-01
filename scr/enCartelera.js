let movies = require("../data/movies.json")
let footer = require("../scr/index")

let content = "<font size=5 color='blue'>En Cartelera. <br/><br/></font>"

content += "<font size=4 color='red'>Total de Peliculas : " + movies.length + "<br/><br/></font>"

content += "<ul>"

moviesOrdenadas = movies.sort(function (a, b){
        return ((a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0))
    });

for (let i= 0; i < moviesOrdenadas.length; i++){
    content += "<li>" + moviesOrdenadas[i].title+"<br/>";
    content += "     " +moviesOrdenadas[i].overview+"<br/><br/></li>";
} 

content += "</ul><br/>"

content += footer

module.exports = content