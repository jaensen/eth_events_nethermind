This repository demonstrates a problem I have with Nethermind's eth_getLogs-implementation.   

The code looks for the following event on the xDai chain:
```json
 {
  address: '0x29b9a7fBb8995b2423a71cC17cf9810798F6C543',
  blockHash: '0x5f2c487b4c06acdeb3a44f7f0ee1a80692feb823e47b5dd3d7220b3884d30ed3',
  blockNumber: 12543096,
  logIndex: 2,
  removed: false,
  transactionHash: '0xd0e1999f70c5e1dbb4892af3f01c5fb33f282eee850b831da516cb81c7428952',
  transactionIndex: 2,
  transactionLogIndex: '0x2',
  type: 'mined',
  id: 'log_565f4305',
  returnValues: Result {
    '0': '0xDE374ece6fA50e781E81Aac78e811b33D16912c7',
    '1': '0x6b35C6Da733836BE97ceD8627C3747824450926b',
    user: '0xDE374ece6fA50e781E81Aac78e811b33D16912c7',
    token: '0x6b35C6Da733836BE97ceD8627C3747824450926b'
  },
  event: 'Signup',
  signature: '0x358ba8f768af134eb5af120e9a61dc1ef29b29f597f047b555fc3675064a0342',
  raw: {
    data: '0x0000000000000000000000006b35c6da733836be97ced8627c3747824450926b',
    topics: [
      '0x358ba8f768af134eb5af120e9a61dc1ef29b29f597f047b555fc3675064a0342',
      '0x000000000000000000000000de374ece6fa50e781e81aac78e811b33d16912c7'
    ]
  }
}
```

__Run Nethermind:__
```shell
./Nethermind.Runner --config configs/xdai.cfg --Init.MemoryHint 4000000000 --Init.WebSocketsEnabled true --JsonRpc.WebSocketsPort 8545 --JsonRpc.Enabled true
```

__Run (in browser):__
```shell
npm i
npm run build
firefox dist/index.html
```

__Run (in node):__
```shell
npm i
npx tsc --no-install
node dist/index.js
```

__Expected behaviour:__  
Both RPC providers (OpenEthereum and Nethermind) should return the same results.  
  
Console output should be as following:
```
$> [event from open ethereum]  
$> [event from nethermind]  
$> "Done"  
```

__Actual behaviour:__  
OpenEthereum returns the requested Signup-event while Nethermind doesn't (it returns an empty result instead).

Console output is:
```
$> [event from open ethereum]
```