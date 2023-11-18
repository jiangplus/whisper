declare const abi: [
  {
    "inputs": [],
    "name": "excludeArtifacts",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "excludedArtifacts_",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "excludeContracts",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "excludedContracts_",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "excludeSenders",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "excludedSenders_",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "targetArtifactSelectors",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "bytes4[]",
            "name": "selectors",
            "type": "bytes4[]"
          }
        ],
        "internalType": "struct StdInvariant.FuzzSelector[]",
        "name": "targetedArtifactSelectors_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "targetArtifacts",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "targetedArtifacts_",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "targetContracts",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "targetedContracts_",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "targetSelectors",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "bytes4[]",
            "name": "selectors",
            "type": "bytes4[]"
          }
        ],
        "internalType": "struct StdInvariant.FuzzSelector[]",
        "name": "targetedSelectors_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "targetSenders",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "targetedSenders_",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]; export default abi;
