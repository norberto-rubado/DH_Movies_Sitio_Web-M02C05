let homePage = require("./scr/homePage")
let enCartelera = require("./scr/enCartelera")
let masVotadas = require("./scr/masVotadas")
let sucursales = require("./scr/sucursales")
let contacto = require("./scr/contacto")
let preguntasFrecuentes = require("./scr/preguntasFrecuentes")

let router = {
    routes: function (req) {

        switch (req.url) {
            // Home
            case '/':
                return homePage
                break;
            // En cartelera
            case '/en-cartelera':
                return enCartelera
                break;
            // Mas Votadas    
            case '/mas-votadas':
                return masVotadas
                break;
            // Sucursales
            case '/sucursales':
                return sucursales
                break;
            // Contacto
            case '/contacto':
                return contacto
                break;
            // Preguntas Frecuentes
            case '/preguntas-frecuentes':
                return preguntasFrecuentes
                break;
            // Error de ingreso
            default:
                return '404 not found'
        }
    }
}

module.exports = router;

