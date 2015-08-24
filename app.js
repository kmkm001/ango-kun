/* app.js */

/**
* 追加モジュール
*/
var fs = require('fs');
var ango = require('./ango');

/**
* 定数
*/
// モードの種類
const MODE_NONE = 0
const MODE_ENCODE = 1;
const MODE_DECODE = 2;

/**
* 処理
*/
// 引数チェック
if (process.argv.length < 6) {
  console.log('missing argument.');
  return;
}

// 引数の内容取得
// 実行モード
var mode;
if(process.argv[2] == '/e'){
  mode = MODE_ENCODE;
}else if(process.argv[2] == '/d'){
  mode = MODE_DECODE;
}else{
  mode = MODE_NONE;
}
// 入力ファイル
var import_file = process.argv[3];
// 出力ファイル
var export_file = process.argv[4];
// パスワード
var password = process.argv[5];

// 実処理部
// 指定のモードなし
if(mode == MODE_NONE){
  console.log('モード指定がありません');
}
// エンコード
else if(mode == MODE_ENCODE){
  // read import file
  var import_data = fs.readFileSync(import_file);
  // data encode
  var tmp_data = new Buffer(import_data).toString('base64');
  var export_data = ango.CipherString(tmp_data, password);
  // write export file
  fs.writeFile(export_file, export_data);
}
// デコード
else if(mode == MODE_DECODE){
  // read import file
  var import_data = fs.readFileSync(import_file, 'utf-8');
  // console.log(import_data);
  // data decode 
  var tmp_data = ango.DecipherString(import_data, password);
  var export_data = new Buffer(tmp_data, 'base64');
  // write export file
  fs.writeFile(export_file, export_data);
}

