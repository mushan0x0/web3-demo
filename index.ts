import Web3 from 'https://deno.land/x/web3/mod.ts'

const providerURL = 'http://127.0.0.1:7545'

const web3 = new Web3(new Web3.providers.HttpProvider(providerURL))

const balance = await web3.eth.getBalance("0x1F3F3FEa217c290fd069A6B578cD7764DB983Ef0")

console.log(`the balance is ${balance} wei`)
