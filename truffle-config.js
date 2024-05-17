module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost
      port: 7545,        // Standard Ganache port
      network_id: "5777", // Ganache network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin
    },
  },
};