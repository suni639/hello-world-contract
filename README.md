# HelloWorld Solidity Smart Contract

A simple Solidity smart contract to store and update a message on the blockchain. This project demonstrates basic smart contract development, deployment, and interaction using Truffle and Ganache.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/hello-world-contract.git
   cd hello-world-contract

2. **Install dependencies**:
   ```sh
   npm install

3. **Install Truffle globally**:
   ```sh
    npm install -g truffle

4. **Install Ganache**:

Download and install from Ganache.

## Usage

1. **Start Ganache** and click 'Quickstart'.

2. **Compile the contract**:
   ```sh
    truffle compile

3. **Deploy the contract**:
   ```sh
    truffle migrate --reset --network development

4. **Interact with the contract**:
   ```sh
    truffle console --network development

In the Truffle console:
```javascript
// Get the deployed contract instance
let instance = await HelloWorld.deployed();

// Read the initial message
let message = await instance.message();
console.log(message);

// Set a new message
await instance.setMessage("Hello, Ethereum!");

// Read the updated message
message = await instance.message();
console.log(message);
```

## License

This project is unlicensed
