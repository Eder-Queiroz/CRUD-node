const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require("bcrypt");

const User = require("./model/User/User");

const basePath = path.join(__dirname, 'template');

router.use(express.static('public'));

router.post("/Login", async (req, res) => {

    const user = await User.findOne({where: {email: req.body['email']}, raw: true});

    const password = await bcrypt.compare(req.body.password, user.password);

    console.log(password);

    if(user && password) {

        res.redirect('/User/table');

    } else {
        
        res.redirect(`/?invalid=true`);
        
    }


});

router.post("/Cadastro", async (req, res) => {
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    await User.create(req.body);

    res.redirect("/");

});

router.get("/Table", async (req, res) => {

    const users = await User.findAll({raw: true});

    res.render('table', {users: users});

});

router.get("/view/:id", async (req, res) => {

    const id = req.params.id;
    const userInfo = await User.findOne({where: {id: id}, raw: true});

    res.render('viewForId', {user: userInfo});

});

router.get("/edit/:id", async (req, res) => {

    const id = req.params.id;
    const userInfo = await User.findOne({where: {id: id}, raw: true});

    res.render('editForId', {user: userInfo});

});

router.post("/edit/:id", async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const cep = req.body.cep;
    const endereco = req.body.endereco;
    const cpf = req.body.cpf;
    const cell = req.body.cell;

    const update = {
        name,
        email,
        cep,
        endereco,
        cpf,
        cell
    }

    const id = req.params.id;

    await User.update(update, {where: {id: id}});

    res.redirect('/User/table');

});

router.post("/delete/:id", async (req, res) => {

    const id = req.params.id;

    await User.destroy({where: {id: id}});

    res.redirect("/User/table");

});

module.exports = router;