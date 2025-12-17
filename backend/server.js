const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

// Servir frontend desde carpeta public
app.use(express.static(path.join(__dirname, "..", "docs")));

// Ruta principal: servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "docs", "index.html"));
});

// 2. Menú 
app.get("/menu", (req, res) => {
  res.json([
    { id: 1, nombre: "Lasaña clásica", precio: 25000 },
    { id: 2, nombre: "Lasaña de pollo", precio: 28000 },
    { id: 3, nombre: "Postre tres leches", precio: 12000 }
  ]);
});

// 3. Contacto
app.post("/contacto", (req, res) => {
  const datos = req.body;

  res.json({
    mensaje: "Mensaje recibido correctamente",
    informacion: datos
  });
});

// 4. Carrito (temporal)
let carrito = [];

// Agregar al carrito
app.post("/carrito/agregar", (req, res) => {
  const producto = req.body;
  carrito.push(producto);

  res.json({
    mensaje: "Producto agregado al carrito",
    carrito: carrito
  });
});

// Ver carrito
app.get("/carrito", (req, res) => {
  res.json(carrito);
});

// 5. Pedidos
app.post("/pedidos", (req, res) => {
  const pedido = req.body;
  
  res.json({
    mensaje: "Pedido recibido",
    pedido: pedido
  });
});

// Ruta para pruebas con el frontend
app.post("/api/enviar-producto", (req, res) => {
  const producto = req.body;
  console.log("📦 Producto recibido del frontend:", producto);

  res.json({
    mensaje: "Producto enviado exitosamente al backend",
    productoRecibido: producto
  });
});

// Puerto donde trabajará el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
