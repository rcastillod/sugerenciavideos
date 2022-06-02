import Reproductor from "./Reproductor.js";

// Instacia de categorias
let musica = new Reproductor('https://www.youtube.com/embed/BSFNl4roGlI', 'musica')
let pelicula = new Reproductor('https://www.youtube.com/embed/Go8nTmfrQd8', 'peliculas')
let serie = new Reproductor('https://www.youtube.com/embed/K-8VYKUZYiw', 'series')

// Invoca a metodo playMultimedia
musica.playMultimedia()
pelicula.playMultimedia()
serie.playMultimedia()

// Invoca a metodo setInicio
pelicula.setInicio(65)