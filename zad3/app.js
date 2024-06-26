const express = require('express');
const bodyParser = require('body-parser');
const carsRoutes = require('./routes/cars');
const homeRoutes = require('./routes/home');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/car', carsRoutes);
app.use('/', homeRoutes);

app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});