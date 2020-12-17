require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad inner clock obscure they'; 
let testAccounts = [
"0x6c0c0182f8ea48ba0c7c6286d85e42eebb7d98f97e24b4e1192e93844bb29472",
"0x1f5ec90bcd4770a0ec098be83dc83ed9c99b382430b10bf2432ee2b837076100",
"0x20d31644bf12304d61960c511c71c9f48eb432922622a3000af4cf286812539f",
"0x390b36fb0a58ec4580c9812c35d03b9e7f4b8c6d0b6cdfe5b2ca009e4209a914",
"0x4c642bb88d1ea337a6370fa990042f7cb002bd06c921e3ee963cc81f4dcd7389",
"0x86cbd98211d24fe0f252a69fdc4771f81736edc51388ee59e3d0d8496e9a823a",
"0x2b7b79a42e27d7a5a3c3d87e7264b9c61b3f21672e244a25f948bca9b593b47b",
"0x455657c0a54f083563dee3ca67da1567c3ec8cc2abc05424ce81e632e0d34f76",
"0x780e5607c79e67ad12b55d7521477e871ce196d39264e306df60f48eae93635f",
"0xaee75f1f8ad8e17aacb04b1bc481e5e3f9e4f24af16a112f218e4b64f6fb42f6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
