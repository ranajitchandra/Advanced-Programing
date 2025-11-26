
const crypto = require('crypto');

console.log("\n MD5: ");


const hash1 = crypto.createHash('md5').update('password132').digest('hex');
const hash2 = crypto.createHash('md5').update('password132').digest('hex');

console.log("input: password132");



console.log("md5 password", hash1);
console.log("md5 password2", hash2);


const sha256Hash1 = crypto.createHash('sha256').update('password132').digest('hex');
const sha256Hash2 = crypto.createHash('sha512').update('password132').digest('hex');

console.log("input: password132");
console.log(sha256Hash1);
console.log(sha256Hash2);

console.log(2**32 / 10**9); // combination complexity





// -------------------------------------------------

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); 

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');


  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted
  };
}

function decrypt(encrypted) {
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(encrypted.iv, 'hex'));
  let decrypted = decipher.update(encrypted.encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

console.log("encription data: ");

const sensitiveData = "my card: 4242 4242 4242 4242, exp: 12/34, cvv: 123";

console.log("original data: ", sensitiveData);

const encrypted = encrypt(sensitiveData);
console.log("encrypted data: ", encrypted);

console.log("decript data: ");
const decrypted = decrypt(encrypted, encrypted.iv);

console.log("decrypted data: ", decrypted);

console.log(sensitiveData === decrypted);

















