import {
  PublicKey,
  Keypair,
  Connection,
  SystemProgram,
  GetVersionedTransactionConfig,
} from "@solana/web3.js";

import { Program, AnchorProvider, setProvider } from "@project-serum/anchor";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
import { IDL } from "./createIDL";

const connection = new Connection(
  "https://solana-devnet.g.alchemy.com/v2/SSqT4TgPt0cWnqyRdJl8AgbyR0HVoi-N",
  "confirmed"
);

let secretKey = Uint8Array.from([
  18, 7, 99, 111, 111, 217, 130, 184, 234, 216, 43, 214, 135, 95, 37, 151, 230,
  227, 32, 9, 63, 166, 153, 239, 125, 228, 163, 32, 18, 159, 224, 121, 183, 248,
  98, 117, 18, 98, 43, 102, 228, 254, 225, 52, 247, 160, 181, 192, 71, 166, 192,
  54, 213, 147, 164, 246, 82, 34, 193, 215, 102, 207, 96, 183,
]);
let wallet = Keypair.fromSecretKey(secretKey);
const key = wallet.publicKey;
console.log("key:", wallet.publicKey);

let wallet1 = new NodeWallet(Keypair.fromSecretKey(secretKey));
const config: GetVersionedTransactionConfig = {
  maxSupportedTransactionVersion: 0, // Set to the desired version or 0 for latest
};

const provider = new AnchorProvider(connection, wallet1, {});
// console.log("provider", provider);
setProvider(provider);

const programId = new PublicKey("ATv39cBBMt5CaBd6TyumUXeWmR9hJDtDVbtpLGV75pcR");
// console.log("programId:", programId);
const program = new Program(IDL, programId, provider);

export const createEvent = async (title: string, outcomes: string[]) => {
  // Create a new Keypair for the event account
  const eventAccount = Keypair.generate();

  // Calculate the required space for the event account
  const eventSpace = 8 + 32 + 256 + 1024; // Adjust as needed based on the struct size

  // Transaction to create and initialize the event account
  const createTx = program.methods
    .createEvent(title, outcomes)
    .accounts({
      event: eventAccount.publicKey,
      creator: wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .signers([eventAccount, wallet]);

  // Get the transaction signature after submission
  const transactionSignature = await createTx.rpc();

  console.log("Transaction signature:", transactionSignature);
  console.log(
    "Event account created with public key:",
    eventAccount.publicKey.toBase58()
  );

  // Optionally, fetch transaction details using the signature
  const transaction = await connection.getLatestBlockhash();
  const confirmedTransaction = await connection.getTransaction(
    transactionSignature,
    config
  );

  return {
    signature: transactionSignature,
    eventAccount: eventAccount.publicKey.toBase58(),
  };
};

export const updateEvent = async (isActive: boolean, event: string) => {
  const eventPublicKey = new PublicKey(event);

  // Transaction to create and initialize the event account
  const updateTx = program.methods
    .updateEvent(isActive)
    .accounts({
      event: eventPublicKey,
      systemProgram: SystemProgram.programId,
    })
    .signers([wallet]);

  // Get the transaction signature after submission
  const transactionSignature = await updateTx.rpc();

  // Optionally, fetch transaction details using the signature
  const transaction = await connection.getLatestBlockhash();
  const confirmedTransaction = await connection.getTransaction(
    transactionSignature,
    config
  );

  return {
    signature: transactionSignature,
  };
};
