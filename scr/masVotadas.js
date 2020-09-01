let movies = require("../data/movies.json")
let footer = require("../scr/index")

let content = "<font size=5 color='blue'>Mas Votadas. <br/><br/></font>"

moviesOrdenadasFiltradas = movies.sort(function (a, b){
        return ((a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0))
    }).filter(function(movie){
        return movie.vote_average >= 7});

content += "<font size=4 color='red'>Total de Peliculas : " + moviesOrdenadasFiltradas.length + "<br/><br/>"

content += "Rating Promedio : " + moviesOrdenadasFiltradas.reduce(function(acum,num){
        return acum + num.vote_average},0) / moviesOrdenadasFiltradas.length + "<br/><br/></font>"

content += "<ul>"

for (let i= 0; i < moviesOrdenadasFiltradas.length; i++){
        content += "<li>" + moviesOrdenadasFiltradas[i].title+"    Rating : " + moviesOrdenadasFiltradas[i].vote_average +"<br/>";
        content += "     " +moviesOrdenadasFiltradas[i].overview+"<br/><br/></li>";
} 

content += "</ul><br/>"

content += footer

module.exports = content