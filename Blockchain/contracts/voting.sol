// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Election {
    struct Candidate {
        uint id;
        string name;
        string party;
        string description;
        string photoUrl;
        string partyLogoUrl;
        uint voteCount;
    }

    address public admin;
    bool public electionActive;
    uint public candidateCount;
    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;

    event ElectionStarted();
    event ElectionStopped();
    event CandidateAdded(uint id, string name, string party);
    event Voted(uint candidateId, address voter);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier electionIsActive() {
        require(electionActive, "Election is not active");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function startElection() public onlyAdmin {
        electionActive = true;
        emit ElectionStarted();
    }

    function stopElection() public onlyAdmin {
        electionActive = false;
        emit ElectionStopped();
    }

    function addCandidate(string memory _name, string memory _party, string memory _description, string memory _photoUrl, string memory _partyLogoUrl) public onlyAdmin {
        candidateCount++;
        candidates[candidateCount] = Candidate(candidateCount, _name, _party, _description, _photoUrl, _partyLogoUrl, 0);
        emit CandidateAdded(candidateCount, _name, _party);
    }

    function vote(uint _candidateId) public electionIsActive {
        require(!hasVoted[msg.sender], "You have already voted");
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate ID");

        candidates[_candidateId].voteCount++;
        hasVoted[msg.sender] = true;

        emit Voted(_candidateId, msg.sender);
    }
}
