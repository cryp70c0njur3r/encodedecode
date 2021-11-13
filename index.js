const crypto = require('crypto')

const algorithm = 'aes-256-cbc' // AESアルゴリズム[256ビット, CBCモード：Cipher Block Chaining mode (暗号ブロック連鎖モード)]
const password = 'password'
const salt = 'salt'
const key = crypto.scryptSync(password, salt, 32)
const iv =  new Buffer("x".repeat(16), "utf8");
const cipher = crypto.createCipheriv(algorithm, key, iv)      // 暗号用インスタンス
const decipher = crypto.createDecipheriv(algorithm, key, iv)  // 復号用インスタンス

const data = 'hello'
const inputEncoding = 'utf8'
const outputEncoding = 'hex' // hexadecimal(16進数)

// 暗号
let cipheredData = cipher.update(data, inputEncoding, outputEncoding)
cipheredData += cipher.final(outputEncoding)
console.log(`「${data}」を暗号化\n→ ${cipheredData}\n`)

// 復号
let decipheredData = decipher.update(cipheredData, outputEncoding, inputEncoding)
decipheredData += decipher.final(inputEncoding)
console.log(`「${cipheredData}」を復号化\n→ ${decipheredData}\n`)


// let xxx = "xxx"
// let decipheredData = decipher.update(xxx, outputEncoding, inputEncoding)
// //decipheredData += decipher.final(inputEncoding)
// //console.log(`「${cipheredData}」を復号化\n→ ${decipheredData}\n`)
// console.log(decipheredData)
