let faqs = require("../data/faqs.json")
let footer = require("../scr/index")

let content = "<font size=5 color='blue'>Preguntas Frecuentes. <br/><br/></font>"

content += "<font size=4 color='red'>Total de Preguntas : " + faqs.length + "<br/><br/></font>"

content += "<ul>"

for (let i= 0; i < faqs.length; i++){
    content += "<li>" + faqs[i].faq_title+"<br/>";
    content += "     " + faqs[i].faq_answer+"<br/><br/></li>";
};

content += "</ul><br/>"

content += footer

module.exports = content
