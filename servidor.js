//inclui o módulo http
var http = require('http');
var login_cadastro = ' '
var senha_cadastro = ' '


//inclue o módulo express
var express = require('express');
var colors = require('colors');
let bodyParser = require("body-parser");
var mongoose = require('mongoose');


//cria a váriavel app, pela qual acessaremos
// os métodos/ funções existentes no framework express
var app = express();

app.set("view engine", "ejs")
app.set("views", "./views")

//usar o json e usar o metodo post
//app.use(bodyParser.urlencoded({extended: false}))
//app.use(bodyParser.json());

//vai pegar o login, vai renderizar e passar para o resposta
//app.post("/cadastro", function (requisicao, resp) {
//    let nome = requisicao.body.nome;
//    let login = requisicao.body.login;
//    let senha = requisicao.body.senha;
//    confirmacao = "cadastro realizado"
//    resp.render("resposta", {nome, login, senha, confirmacao})

//    login_cadastro = login
//    senha_casdastro = senha

//});

//app.post("/login", function (requisicao, resp) {
  //  var nome = requisicao.body.nome;
  //  var login = requisicao.body.login;
  //  var senha = requisicao.body.senha;
    //if (login_cadastro == login && senha_cadastro == senha) {
      //  confirmacao = "cadastro realizado"
        //resp.render("resposta", {nome, login, senha, confirmacao})
    //}
    //else {
      //  confirmacao = "ta errado"
        //resp.render("resposta", {nome, login, senha, confirmacao})
    //}
//});

app.get("/", function (req, resp ){
    resp.redirect("Projetos.html")
})

//método use() utilizado para definir em qual
//pasta estará o conteúdo estático
app.use(express.static('./public'));

//cria o servidor
var server = http.createServer(app);

//define o número da porta que o servidor ouvirá
server.listen(80);

//mensagem exibida no console para debug
console.log("servidor rodando...".rainbow);

//Mongoose (Banco de Dados)
mongoose.connect("mongodb://localhost/AulaDB")

var modelUsuarioSchema = new mongoose.Schema  ({
    login : String ,
    senha : String ,
    idade : Number });
var modelUsuario = mongoose.model('usuarios', modelUsuarioSchema);

//criar usuario
var novo new modelUsuario({
    login : 'Seori',
    senha : '1234',
    idade : 22
});

novo.save(function (err,obj){
    if(err){
        console.log('erro!');
    }
});

modelUsuario.find({login: 'Seori'} , function (err, obj){
    console.log(obj.senha);
});

app.post('/cadastra_usuario', function (req, resp) {
    let nome_cadastro = req.body.nome;
    let login_cadastro = req.body.login;
    let senha_cadastro = req.body.senha;

    var novo = new usuarioModel({
        dbNome: nome_cadastro,
        dbLogin: login_cadastro,
        dbSenha: senha_cadastro
    });
    novo.save();

    resp.write('<h1>Post Cadastrado!</hr>');
    resp.end();
});

app.post('/login', function (req,resp){
    let login = req.body.logar_login;
    let senha = req.body.logar_senha;

    usuarioModel.find({dbLogin: login, dbSenha: senha}, function (err, obj){
        if(obj.length){
            let mensagem = "Sucesso!";
            resp.render("Resposta", {mensagem, login, senha});
        } else{
            let mensagem = "Falha!";
            resp.render("resposta", {mensagem, login, senha});
        }
    });
});