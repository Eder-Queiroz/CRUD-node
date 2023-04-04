const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const db = require('./model/User/User');
const user = require('./router');
const path = require('path');

const basePath = path.join(__dirname, 'template');

const port = 8080;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());

// arquivos estaticos

app.use(express.static('public'));

app.use('/User', user);

app.get("/", async (req, res) => {

    res.render(`home`);

});

// 404

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}: http://localhost:${port}/`);
})