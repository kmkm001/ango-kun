/* ango.js */

var crypto = require('crypto');

/**
* 定数
*/
const CRYPTO_ALGORITHM = 'aes128';//暗号化アルゴリズム
const STRING_ENCODE = 'utf8'; //BASE64encode
const CRYPTO_ENCODE = 'hex';  //暗号化encode


/**
* CRYPTO_ALGOTITHMアルゴリズムを用いて
* CRYPTO_ENCODEを文字列に復号化する
*/
exports.DecipherString = function(string, passwd) {
  var decipher = crypto.createDecipher(CRYPTO_ALGORITHM, passwd);
  var dec = decipher.update(string, CRYPTO_ENCODE, STRING_ENCODE);
  dec += decipher.final(STRING_ENCODE);
  return dec;
}


/**
* CRYPTO_ALGOTITHMアルゴリズムを用いて
* 文字列をCRYPTO_ENCODEに暗号化する
*/
exports.CipherString = function(string, passwd) {
  var cipher = crypto.createCipher(CRYPTO_ALGORITHM, passwd);
  var cip = cipher.update(string, STRING_ENCODE, CRYPTO_ENCODE);
  cip += cipher.final(CRYPTO_ENCODE);
  return cip;
}
