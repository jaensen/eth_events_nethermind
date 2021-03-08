import Web3 from "web3";
import type { AbiItem } from "web3-utils";
import {CIRCLES_HUB_ABI} from "./abi";

const userAddress = "0xDE374ece6fA50e781E81Aac78e811b33D16912c7";
const hubAddress = "0x29b9a7fBb8995b2423a71cC17cf9810798F6C543";
const circlesHubBlockNo = 12529458;

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