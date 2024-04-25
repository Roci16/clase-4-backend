const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    let respuesta = "";
    let statusCode = 200;

    if (req.url === '/') {
        respuesta = "Bienvenidos, Gracias por tu visita";
    } else if (req.url === '/nosotras') {
        respuesta = "Bienvenidos a saber + de nosotras :)";
    } else if (req.url === '/cursos') {
        respuesta = "Te interesan nuestros cursos?. Veni a conocernos";
    } else if (req.url === '/contacto') {
        respuesta = "Si te gusta contactanos";
    } else {
        statusCode = 404;
        respuesta = "No se encontró la ruta";
    }

    res.statusCode = statusCode
    res.setHeader('charset', 'utf-8')
    res.setHeader('Content-Type', 'text/plain')
    res.end(respuesta)
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});