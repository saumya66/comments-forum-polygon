// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";

contract Comments {
    struct Comment {
        uint32 id;
        string topic;
        address creator_address;
        string message;
        uint256 created_at;
    }
        
    event CommentAdded(Comment comment);
 
    uint32 private idCounter;
    mapping(string => Comment[]) private commentsByTopic;
  
    function getComments(string calldata topic) public view returns(Comment[] memory) {
        return commentsByTopic[topic];
    }
    function addComment(string calldata topic, string calldata message) public {
        Comment memory comment = Comment({
            id: idCounter,
            topic: topic,
            creator_address: msg.sender,
            message: message,
            created_at: block.timestamp
        });
        commentsByTopic[topic].push(comment);
        idCounter++;
        emit CommentAdded(comment);
    }
}
