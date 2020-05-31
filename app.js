// モジュールをロードしてインスタンス化
const express = require('express');
const app = express();

const ejs = require('ejs');
const port = "3000";

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

	const mysql = require('mysql');

	// DB接続情報
	const con = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'X8'
	});
});

	// // コネクション接続
	// con.connect(function (err) {
	// 	if (err) throw err;
	// 	console.log('接続成功！');
	// });

	// const sql = "INSERT INTO monster(name) VALUES(?)";
	// con.query(sql, ['ゼニガメ'], (err, result, fields) => {
	// 	if(err) throw err;
	// 	console.log(result);
	// });

// HTTPリクエストを受け取る部分
app.get('/', (req, res) => {
	res.render('index',
	{
		title:' サンプルページ',
		btnName: '登録!'
	})
	// const sql = "select * from monster"
	// con.query(sql, function (err, result, fields) {
	// 	if (err) throw err;
	// 	res.send(result);
	// });
});

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// 
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// 
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// 
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
// 
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
// 
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// 
module.exports = app;
