pragma solidity ^0.4.11;

contract Register {
    struct User {
        string dataHash;
        bool isValid;
    }

    mapping(address => User) registry;

    function addUser(string _dataHash) public {
        registry[msg.sender] = User(_dataHash, true);
    }

    function userRegistered(address _user) constant public returns(bool) {
        if (registry[_user].isValid) {
            return true;
        } else {
            return false;
        }
    }
}