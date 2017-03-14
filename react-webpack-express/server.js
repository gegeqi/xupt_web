import express from "express";
import webpack from "webpack";
<<<<<<< HEAD
import path from "path";
=======
>>>>>>> upstream/dev
import WebpackHotMiddleware from 'webpack-hot-middleware';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';
import bodyParser from 'body-parser';
var compiler = webpack(config);
const app = express();

// 引入webpack组件
app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));
app.use(WebpackHotMiddleware(compiler));


app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(express.static('public'));


var router = express.Router();
router.get('/login', function (req, res, next) {
<<<<<<< HEAD
    res.sendFile(path.resolve('./public/views/login_register.html')); // 发送静态文件
});
router.get('/register', function (req, res, next) {
    res.sendFile(path.resolve('./public/views/login_register.html'));
});

// 根目录下的所有404错误，引向index.html页面，让react-router进行解析
router.use('*', function (req, res) {
    res.sendFile(path.resolve('./public/views/index.html'));
=======
    res.sendfile('./public/views/login_register.html'); // 发送静态文件
});
router.get('/register', function (req, res, next) {
    res.sendfile('./public/views/login_register.html');
});

// 根目录下的所有404错误，引向index.html页面，让react-router进行解析
router.get('/*', function (req, res) {
    res.sendfile('./public/views/index.html');
>>>>>>> upstream/dev
});
app.use(router);

app.listen(3000, function () {
    console.log('Listening on 3000');
});
