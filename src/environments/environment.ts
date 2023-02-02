export const environment = {
    "FLOW_RATE": 1543209876543,
    "EPNS_CHANNEL_ID": "0x15Aadb605F1F2D06F97946f5BaE84F3B70686231",
    "EPNS_CHANNEL_ADDRESS": "eip155:5:0x15Aadb605F1F2D06F97946f5BaE84F3B70686231",
    "userRegistry": "0xAb49a54Fa02fD8F7D8ae619a4F34Df3da45249ba",
    "userRegistryABI": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "svr",
                    "type": "address"
                }
            ],
            "name": "addServerAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "addUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unSubscribe",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "checkUserSubsciptionStatus",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getUsers",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    // "USDTABI": [
    //     {
    //         "inputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "constructor"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "owner",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "spender",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "value",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "Approval",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "previousOwner",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "newOwner",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "OwnershipTransferred",
    //         "type": "event"
    //     },
    //     {
    //         "anonymous": false,
    //         "inputs": [
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "from",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": true,
    //                 "internalType": "address",
    //                 "name": "to",
    //                 "type": "address"
    //             },
    //             {
    //                 "indexed": false,
    //                 "internalType": "uint256",
    //                 "name": "value",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "Transfer",
    //         "type": "event"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "owner",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "spender",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "allowance",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "spender",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "amount",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "approve",
    //         "outputs": [
    //             {
    //                 "internalType": "bool",
    //                 "name": "",
    //                 "type": "bool"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "account",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "balanceOf",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "decimals",
    //         "outputs": [
    //             {
    //                 "internalType": "uint8",
    //                 "name": "",
    //                 "type": "uint8"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "spender",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "subtractedValue",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "decreaseAllowance",
    //         "outputs": [
    //             {
    //                 "internalType": "bool",
    //                 "name": "",
    //                 "type": "bool"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "spender",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "addedValue",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "increaseAllowance",
    //         "outputs": [
    //             {
    //                 "internalType": "bool",
    //                 "name": "",
    //                 "type": "bool"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "to",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "amount",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "mint",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "name",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "owner",
    //         "outputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "renounceOwnership",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "symbol",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "totalSupply",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "to",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "amount",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "transfer",
    //         "outputs": [
    //             {
    //                 "internalType": "bool",
    //                 "name": "",
    //                 "type": "bool"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "from",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "to",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "amount",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "transferFrom",
    //         "outputs": [
    //             {
    //                 "internalType": "bool",
    //                 "name": "",
    //                 "type": "bool"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "newOwner",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "transferOwnership",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     }
    // ],
    // "USDT": "0xDb3639A7e047290d65Ad3BA580153C1D439C8441",
    // "USDTxABI": [{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address","name":"initialAddress","type":"address"}],"name":"initializeProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
    // "USDTx": "0x133976998645026E76705209d130Ca853860B7cC",
    // "fTUSD": "0x53d00397f03147A9bD9c40443A105A82780deAF1",
    // "fTUSDABI": [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],
    "faucetContract": "0x04e77c3a4D46BA60fcd2cb48a2FDA6d117E65e69",
    "faucetABI": [
        {
          inputs: [
            { internalType: "contract ISuperToken", name: "_token", type: "address" }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "tapFaucet",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "token",
          outputs: [
            { internalType: "contract ISuperToken", name: "", type: "address" }
          ],
          stateMutability: "view",
          type: "function"
        }
    ],
    "sDaix": "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
    "sDaixABI": [{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address","name":"initialAddress","type":"address"}],"name":"initializeProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
    "ownerAddress": "0xee6f3c8c7452acafa0a2d2586552f8b77a3e4286"
}