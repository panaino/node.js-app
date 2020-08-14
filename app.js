// モジュールをロードしてインスタンス化
const express = require('express');
const app = express();

const ejs = require('ejs');
const port = "3000";

const mysql = require('mysql');

// DB接続情報
const con = mysql.createConnection({
	multipleStatements: true,
	host: 'localhost',
	user: 'root',
	password: 'rootpass',
	database: 'Node_Poke_Project'
});

// renderメソッドの拡張子が必要なくなる
app.set("view engine", "ejs");
// 静的ファイルの読み込み
app.use(express.static('public'));
// ボディーパーサー
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// サーバーを起動する部分
const server = app.listen(port, () => {
	console.log('app listening on port:', server.address().port);

	// DB接続
	con.connect(function (err) {
		if (err) throw err;
		console.log('接続成功！');
	});
});

// HTTPリクエストを受け取る部分
app.get('/', (req, res) => {
	con.query('SELECT * FROM TB_PESONRALITY;SELECT * FROM TB_PARAMETER_INFO ORDER BY DISP_NO asc;SELECT * FROM TB_MONSTER_INFO'
	, function (err, results, fields) {
		if (err) throw err;
		res.render('index',
		{
			pesonrality_info: results[0],
			parameter_info: results[1],
			monster_info: results[2]
		})
	});
});

// POSTデータ(登録)を受け取る部分
app.post('/register', (req, res) => {
	res.send({
		name: req.body.NAME,
		PESONRALITY: req.body.PESONRALITY,
		H: req.body.H || 0,
		A: req.body.A || 0,
		B: req.body.B || 0,
		C: req.body.C || 0,
		D: req.body.D || 0,
		S: req.body.S || 0
	});
});

module.exports = app;
