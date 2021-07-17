// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "./IHasSecondarySaleFees.sol";

contract HasSecondarySaleFees is IERC165 {
    
    address payable[] private defaultSecondaryFeeAddress;
    uint256[] private defaultSecondaryFee;
    
    mapping(uint256 => address payable[]) private secondaryFeeAddress;
    mapping(uint256 => uint256[]) private secondaryFee;

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(IERC165)
        returns (bool)
    {
        return interfaceId == type(IHasSecondarySaleFees).interfaceId;
    }
    
    function _setSecondaryFee(
        uint256 _tokenId,
        address payable[] memory _secondaryFeeAddress,
        uint256[] memory _secondaryFee
    ) internal {
        require(_secondaryFeeAddress.length == _secondaryFee.length, "different length");
        secondaryFeeAddress[_tokenId] = _secondaryFeeAddress;
        secondaryFee[_tokenId] = _secondaryFee;
    }

    function _setDefaultSecondaryFee(address payable[] memory _secondaryFeeAddress, uint256[] memory _secondaryFee) internal {
        require(_secondaryFeeAddress.length == _secondaryFee.length, "different length");
        defaultSecondaryFeeAddress = _secondaryFeeAddress;
        defaultSecondaryFee = _secondaryFee;
    }

    function getFeeRecipients(uint256 _tokenId) external view returns (address payable[] memory) {
        return secondaryFeeAddress[_tokenId].length > 0 ? secondaryFeeAddress[_tokenId] : defaultSecondaryFeeAddress;
    }

    function getFeeBps(uint256 _tokenId) external view returns (uint256[] memory) {
        return secondaryFee[_tokenId].length > 0 ? secondaryFee[_tokenId] : defaultSecondaryFee;
    }
}