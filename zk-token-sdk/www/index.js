import * as zk from "zk-token-sdk";

const secret = zk.ElGamalSecretKey.new_rand();
console.log({ secret });

const publicKey = zk.ElGamalPubkey.new(secret);
console.log({ publicKey });

const bytes = publicKey.to_uint8_array();
console.log({ bytes });

const recovered = zk.ElGamalPubkey.from_uint8_array(bytes);
console.log({ recovered });

const recoveredBytes = recovered.to_uint8_array();
console.log({ recoveredBytes });

const amount = 123;
const encrypted = zk.ElGamal.encrypt_amount(publicKey, amount);
console.log({ encrypted });

const decrypted = zk.ElGamal.decrypt_amount(secret, encrypted);
console.log({ decrypted });
