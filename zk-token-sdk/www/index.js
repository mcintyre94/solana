import * as zk from "zk-token-sdk";

const secret = zk.ElGamalSecretKey.new_rand();
console.log({ secret });

const publicKey = zk.ElGamalPubkey.new(secret);
console.log({ publicKey });

const bytes = publicKey.to_uint8_array();
console.log({ bytes });
