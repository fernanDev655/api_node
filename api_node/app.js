const http = require("http");
const os = require("os");

const servidor = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bienvenido a la API de estado de Fernando Gallardo López\n");
  } else if (req.url === "/estado") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(
      JSON.stringify({
        servicio: "api_node",
        hostname: os.hostname(),
        uptime_segundos: process.uptime(),
        fecha: new Date().toISOString(),
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Ruta no encontrada\n");
  }
});

servidor.listen(3000);
