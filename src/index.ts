import Web3 from "web3";
import type { AbiItem } from "web3-utils";

const userAddress = "0xDE374ece6fA50e781E81Aac78e811b33D16912c7";
const hubAddress = "0x29b9a7fBb8995b2423a71cC17cf9810798F6C543";
const circlesHubBlockNo = 12529458;

export const CIRCLES_HUB_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_inflation",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_period",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_signupBonus",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_initialIssuance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_timeout",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "HubTransfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "organization",
                "type": "address"
            }
        ],
        "name": "OrganizationSignup",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "Signup",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "canSendTo",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "limit",
                "type": "uint256"
            }
        ],
        "name": "Trust",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "deployedAt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "divisor",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "inflation",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "initialIssuance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "limits",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "organizations",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "period",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "seen",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "signupBonus",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "timeout",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "tokenToUser",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userToToken",
        "outputs": [
            {
                "internalType": "contract Token",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "validation",
        "outputs": [
            {
                "internalType": "bool",
                "name": "seen",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "sent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "received",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "periods",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "issuance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_periods",
                "type": "uint256"
            }
        ],
        "name": "issuanceByStep",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_initial",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_periods",
                "type": "uint256"
            }
        ],
        "name": "inflate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "signup",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "organizationSignup",
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
            },
            {
                "internalType": "uint256",
                "name": "limit",
                "type": "uint256"
            }
        ],
        "name": "trust",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "base",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "exponent",
                "type": "uint256"
            }
        ],
        "name": "pow",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "src",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dest",
                "type": "address"
            }
        ],
        "name": "checkSendLimit",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "tokenOwners",
                "type": "address[]"
            },
            {
                "internalType": "address[]",
                "name": "srcs",
                "type": "address[]"
            },
            {
                "internalType": "address[]",
                "name": "dests",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "wads",
                "type": "uint256[]"
            }
        ],
        "name": "transferThrough",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const localNethermind = new Web3.providers.WebsocketProvider(
    "ws://localhost:8545",
    {
        timeout: 30000,
        reconnect: {
            auto: true,
            delay: 5000,
            maxAttempts: 1,
            onTimeout: true
        },
        clientConfig: {
            keepalive: true,
            keepaliveInterval: 60000
        }
    }
);
localNethermind.on("close", <any>((e: any) => {
    console.error(`localNethermindWeb3: ws connection closed. Error code ${e.code}, reason "${e.reason}"`);
    console.error("localNethermindWeb3: provider closed:", e);
}));
localNethermind.on("error", <any>((e: any) => {
    console.error("localNethermindWeb3: provider error:", e);
}));

const localNethermindWeb3 = new Web3();
localNethermindWeb3.setProvider(localNethermind);

const openEthereum = new Web3.providers.WebsocketProvider(
    "wss://xdai.poanetwork.dev/wss",
    {
        timeout: 30000,
        reconnect: {
            auto: true,
            delay: 5000,
            maxAttempts: 1,
            onTimeout: true
        },
        clientConfig: {
            keepalive: true,
            keepaliveInterval: 60000
        }
    }
);
openEthereum.on("close", <any>((e: any) => {
    console.error(`openEthereumWeb3 ws connection closed. Error code ${e.code}, reason "${e.reason}"`);
    console.error("openEthereumWeb3 provider closed:", e);
}));
openEthereum.on("error", <any>((e: any) => {
    console.error("openEthereumWeb3 provider error:", e);
}));

const openEthereumWeb3 = new Web3();
openEthereumWeb3.setProvider(openEthereum);

async function run() {
    const oeHubContract = new openEthereumWeb3.eth.Contract(<AbiItem[]>CIRCLES_HUB_ABI, hubAddress)

    return new Promise(async resolve => {
        let a = false;
        let b = false;
        const options = {
            event: "Signup",
            filter: {
                user: userAddress
            },
            fromBlock: circlesHubBlockNo,
            toBlock: "latest"
        };

        let result = await oeHubContract.getPastEvents(options.event, options);
        result.forEach(event => {
            a = true;
            console.log("oeEvent:", event)

            if (a && b) {
                resolve(null);
            }
        });

        const nethermindHubContract = new localNethermindWeb3.eth.Contract(<AbiItem[]>CIRCLES_HUB_ABI, "0x29b9a7fBb8995b2423a71cC17cf9810798F6C543");
        result = await nethermindHubContract.getPastEvents(options.event, options);
        result.forEach(event => {
            b = true;
            console.log("nethermindEvent:", event)

            if (a && b) {
                resolve(null);
            }
        });
    });
}

run().then(() => {
    console.log("Done.");
}).catch(e => {
    console.log("Error: ", e);
})