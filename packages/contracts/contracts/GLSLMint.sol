// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// reference to the contract at the following address
// https://etherscan.io/address/0x1e38149c18117Ec8481452B5dd841D9b280c0953#code

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import "./extentions/HasSecondarySaleFees.sol";
import "hardhat/console.sol";

contract GLSLMint is
    Initializable,
    OwnableUpgradeable,
    ERC721Upgradeable,
    ERC721BurnableUpgradeable,
    HasSecondarySaleFees
{
    uint256 internal nextTokenId = 0;
    mapping(uint256 => string) public ipfsHashMap;

    function initialize(
        address _owner,
        string memory _name,
        string memory _symbol
    ) public initializer {
        __Ownable_init_unchained();
        transferOwnership(_owner);
        __ERC721_init_unchained(_name, _symbol);
    }

    function supportsInterface(bytes4 _interfaceId)
        public
        view
        override(ERC721Upgradeable, HasSecondarySaleFees)
        returns (bool)
    {
        return super.supportsInterface(_interfaceId);
    }

    function setDefaultSecondaryFee(address payable[] memory _secondaryFeeAddress, uint256[] memory _secondaryFee) public onlyOwner {
        _setDefaultSecondaryFee(_secondaryFeeAddress, _secondaryFee);
    }

    function setSecondaryFee(
        uint256 _tokenId,
        address payable[] memory _secondaryFeeAddress,
        uint256[] memory _secondaryFee
    ) public onlyOwner {
        _setSecondaryFee(_tokenId, _secondaryFeeAddress, _secondaryFee);
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        require(_exists(_tokenId), "token is not exists");
        return string(abi.encodePacked("ipfs://", ipfsHashMap[_tokenId]));
    }

    function mint(address _to, string memory _hash) public {
        uint256 tokenId = nextTokenId;
        nextTokenId = tokenId + 1;
        ipfsHashMap[tokenId] = _hash;
        _mint(_to, tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override(ERC721Upgradeable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

}
