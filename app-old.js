const http = require("http");

http
  .createServer((req, res) => {
    // Request: 200, specify content type.
    // http.createServer requires a callback, first passing request and then response.
    res.writeHead(200, { "Content-Type": "application/json" });

    let salida = {
      nombre: "Mauro",
      apellido: "Rios",
      edad: "24",
      url: req.url,
    };

    res.write(JSON.stringify(salida));
    // res.write("Hola Mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto 8080");
