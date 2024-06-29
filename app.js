const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('¡API REST funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor API REST escuchando en http://localhost:${PORT}`);
});
