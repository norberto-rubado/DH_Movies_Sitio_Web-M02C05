let theaters = require("../data/theaters.json")
let footer = require("../scr/index")

let content = "<font size=5 color='blue'>Nuestras Salas. <br/><br/></font>"

content += "<font size=4 color='red'>Total de Salas : " + theaters.length + "<br/><br/></font>"

content += "<ul>"

for (let i= 0; i < theaters.length; i++){
    content += "<li>" + theaters[i].name+"<br/>";
    content += theaters[i].address+"<br/>";
    content += "     " +theaters[i].description+"<br/><br/></li>";
};

content += "</ul><br/>"

content += footer

module.exports = content