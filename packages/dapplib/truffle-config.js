require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note shift pupil idea process symptom split'; 
let testAccounts = [
"0x414563bf1d08d2463711a12effaad796e99643ea2f767857b3924f1a5531d779",
"0xe59d827870123255f351596a3ce7dd88238a33187f639be135e0ce7ea790ce0f",
"0xc9049cd80bd60c8a5b59d19e06627a8f1f532fbc55ad8412b14339970b7684de",
"0x64c6910e87c43c321b0056f28dee8144f1cbe78ef4af62cff072145764d26afb",
"0x10d34710e5d20585407c54c53c13730af07d61340dc4c05abebac682792e852f",
"0xc01510e5f3ceb65c851692d66fc1a10aa08e500cc692ad2f0af8549595b5193d",
"0x9bc74565cc3897ec448756238345d6f37f762dea1a948a5e3288fd82a32347e3",
"0x74db8eb2ab68c35c2325ab063f2400d509a9675c8f0a49ef38ba7f4af1663967",
"0x6bdccf3d306a47833136f13b5aa75ae504ecf41fd90fa4e0519bbe7fe8b918ca",
"0xa153ac4d8669313d881d6251655aa7f235d8a3eaf1c0951e7d49a36be9478793"
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
            version: '^0.8.0'
        }
    }
};

