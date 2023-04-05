import * as zk from "zk-token-sdk";

// const secret = zk.ElGamalSecretKey.new_rand();
// console.log({ secret });

// const publicKey = zk.ElGamalPubkey.new(secret);
// console.log({ publicKey });

// const bytes = publicKey.to_uint8_array();
// console.log({ bytes });

// const recovered = zk.ElGamalPubkey.from_uint8_array(bytes);
// console.log({ recovered });

// const recoveredBytes = recovered.to_uint8_array();
// console.log({ recoveredBytes });

const { publicKey, secret } = zk.ElGamal.keygen();

console.log({ publicKey: publicKey.to_uint8_array() });
console.log({ secret: secret.to_uint8_array() });

const amount = BigInt(1000);
console.log({ amount });

const encrypted = zk.ElGamal.encrypt_amount(publicKey, amount);
const addTen = encrypted.add_amount_js(BigInt(10));

console.log("added 10 to encrypted value");

const decrypted = addTen.decrypt_amount(secret);
console.log({ decrypted });
