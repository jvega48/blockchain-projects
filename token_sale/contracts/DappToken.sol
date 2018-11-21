pragma solidity ^0.4.2;

contract DappToken {

    // name 
    // symbol
    
    string public name = "Dapp Token";
    string public symbol = "Dapp";
    string public standard = "Dapp Token v1.0";
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;

    function DappToken (uint256 _initialSupply) public {
        // account msg.sender 
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
}