"use strict";

var _Reproductor = _interopRequireDefault(require("./Reproductor.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Instacia de categorias
var musica = new _Reproductor["default"]('https://www.youtube.com/embed/BSFNl4roGlI', 'musica');
var pelicula = new _Reproductor["default"]('https://www.youtube.com/embed/Go8nTmfrQd8', 'peliculas');
var serie = new _Reproductor["default"]('https://www.youtube.com/embed/K-8VYKUZYiw', 'series'); // Invoca a metodo playMultimedia

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia(); // Invoca a metodo setInicio

pelicula.setInicio(65);