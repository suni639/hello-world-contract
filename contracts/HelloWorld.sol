// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract SimpleContract {
    string public message;

    constructor() {
        message = "Hello, Blockchain!";
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
