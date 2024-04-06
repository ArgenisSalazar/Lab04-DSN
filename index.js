const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const navbar = fs.readFileSync(path.join(__dirname, 'public', 'navbar.html'), 'utf8');
  const indexContent = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');
  const renderedIndex = indexContent.replace('<div id="navbar-placeholder"></div>', navbar);
  res.send(renderedIndex);
});

app.get('/clientes', (req, res) => {
  const navbar = fs.readFileSync(path.join(__dirname, 'public', 'navbar.html'), 'utf8');
  const clientesContent = fs.readFileSync(path.join(__dirname, 'public', 'clientes.html'), 'utf8');
  const renderedClientes = clientesContent.replace('<div id="navbar-placeholder"></div>', navbar);
  res.send(renderedClientes);
});

app.get('/productos', (req, res) => {
  const navbar = fs.readFileSync(path.join(__dirname, 'public', 'navbar.html'), 'utf8');
  const productosContent = fs.readFileSync(path.join(__dirname, 'public', 'productos.html'), 'utf8');
  const renderedProductos = productosContent.replace('<div id="navbar-placeholder"></div>', navbar);
  res.send(renderedProductos);
});

const PORT = process.env.PORT || 13200;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});