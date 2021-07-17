/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Upgradeable,
  ERC721UpgradeableInterface,
} from "../ERC721Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506122ef806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e9919061167f565b6102bc565b6040516100fb9190611cf7565b60405180910390f35b61010c61039e565b6040516101199190611d12565b60405180910390f35b61013c600480360381019061013791906116d1565b610430565b6040516101499190611c90565b60405180910390f35b61016c60048036038101906101679190611643565b6104b5565b005b6101886004803603810190610183919061153d565b6105cd565b005b6101a4600480360381019061019f919061153d565b61062d565b005b6101c060048036038101906101bb91906116d1565b61064d565b6040516101cd9190611c90565b60405180910390f35b6101f060048036038101906101eb91906114d8565b6106ff565b6040516101fd9190611eb4565b60405180910390f35b61020e6107b7565b60405161021b9190611d12565b60405180910390f35b61023e60048036038101906102399190611607565b610849565b005b61025a6004803603810190610255919061158c565b6109ca565b005b610276600480360381019061027191906116d1565b610a2c565b6040516102839190611d12565b60405180910390f35b6102a660048036038101906102a19190611501565b610ad3565b6040516102b39190611cf7565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610397575061039682610b67565b5b9050919050565b6060606580546103ad906120e4565b80601f01602080910402602001604051908101604052809291908181526020018280546103d9906120e4565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610bd1565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611e14565b60405180910390fd5b6069600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052890611e74565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610550610c3d565b73ffffffffffffffffffffffffffffffffffffffff16148061057f575061057e81610579610c3d565b610ad3565b5b6105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b590611db4565b60405180910390fd5b6105c88383610c45565b505050565b6105de6105d8610c3d565b82610cfe565b61061d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061490611e94565b60405180910390fd5b610628838383610ddc565b505050565b610648838383604051806020016040528060008152506109ca565b505050565b6000806067600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611df4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790611dd4565b60405180910390fd5b606860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060606680546107c6906120e4565b80601f01602080910402602001604051908101604052809291908181526020018280546107f2906120e4565b801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b5050505050905090565b610851610c3d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b690611d74565b60405180910390fd5b80606a60006108cc610c3d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610979610c3d565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516109be9190611cf7565b60405180910390a35050565b6109db6109d5610c3d565b83610cfe565b610a1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1190611e94565b60405180910390fd5b610a2684848484611038565b50505050565b6060610a3782610bd1565b610a76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6d90611e54565b60405180910390fd5b6000610a80611094565b90506000815111610aa05760405180602001604052806000815250610acb565b80610aaa846110ab565b604051602001610abb929190611c6c565b6040516020818303038152906040525b915050919050565b6000606a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166067600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816069600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cb88361064d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d0982610bd1565b610d48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3f90611d94565b60405180910390fd5b6000610d538361064d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dc257508373ffffffffffffffffffffffffffffffffffffffff16610daa84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b80610dd35750610dd28185610ad3565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dfc8261064d565b73ffffffffffffffffffffffffffffffffffffffff1614610e52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4990611e34565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ec2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb990611d54565b60405180910390fd5b610ecd838383611258565b610ed8600082610c45565b6001606860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f289190611ffa565b925050819055506001606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7f9190611f73565b92505081905550816067600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b611043848484610ddc565b61104f8484848461125d565b61108e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108590611d34565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156110f3576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611253565b600082905060005b6000821461112557808061110e90612116565b915050600a8261111e9190611fc9565b91506110fb565b60008167ffffffffffffffff811115611167577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156111995781602001600182028036833780820191505090505b5090505b6000851461124c576001826111b29190611ffa565b9150600a856111c1919061215f565b60306111cd9190611f73565b60f81b818381518110611209577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856112459190611fc9565b945061119d565b8093505050505b919050565b505050565b600061127e8473ffffffffffffffffffffffffffffffffffffffff166113f4565b156113e7578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026112a7610c3d565b8786866040518563ffffffff1660e01b81526004016112c99493929190611cab565b602060405180830381600087803b1580156112e357600080fd5b505af192505050801561131457506040513d601f19601f8201168201806040525081019061131191906116a8565b60015b611397573d8060008114611344576040519150601f19603f3d011682016040523d82523d6000602084013e611349565b606091505b5060008151141561138f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138690611d34565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506113ec565b600190505b949350505050565b600080823b905060008111915050919050565b600061141a61141584611f00565b611ecf565b90508281526020810184848401111561143257600080fd5b61143d8482856120a2565b509392505050565b6000813590506114548161225d565b92915050565b60008135905061146981612274565b92915050565b60008135905061147e8161228b565b92915050565b6000815190506114938161228b565b92915050565b600082601f8301126114aa57600080fd5b81356114ba848260208601611407565b91505092915050565b6000813590506114d2816122a2565b92915050565b6000602082840312156114ea57600080fd5b60006114f884828501611445565b91505092915050565b6000806040838503121561151457600080fd5b600061152285828601611445565b925050602061153385828601611445565b9150509250929050565b60008060006060848603121561155257600080fd5b600061156086828701611445565b935050602061157186828701611445565b9250506040611582868287016114c3565b9150509250925092565b600080600080608085870312156115a257600080fd5b60006115b087828801611445565b94505060206115c187828801611445565b93505060406115d2878288016114c3565b925050606085013567ffffffffffffffff8111156115ef57600080fd5b6115fb87828801611499565b91505092959194509250565b6000806040838503121561161a57600080fd5b600061162885828601611445565b92505060206116398582860161145a565b9150509250929050565b6000806040838503121561165657600080fd5b600061166485828601611445565b9250506020611675858286016114c3565b9150509250929050565b60006020828403121561169157600080fd5b600061169f8482850161146f565b91505092915050565b6000602082840312156116ba57600080fd5b60006116c884828501611484565b91505092915050565b6000602082840312156116e357600080fd5b60006116f1848285016114c3565b91505092915050565b6117038161202e565b82525050565b61171281612040565b82525050565b600061172382611f30565b61172d8185611f46565b935061173d8185602086016120b1565b6117468161224c565b840191505092915050565b600061175c82611f3b565b6117668185611f57565b93506117768185602086016120b1565b61177f8161224c565b840191505092915050565b600061179582611f3b565b61179f8185611f68565b93506117af8185602086016120b1565b80840191505092915050565b60006117c8603283611f57565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b600061182e602483611f57565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611894601983611f57565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b60006118d4602c83611f57565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b600061193a603883611f57565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b60006119a0602a83611f57565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a06602983611f57565b91507f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008301527f656e7420746f6b656e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a6c602c83611f57565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000611ad2602983611f57565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000611b38602f83611f57565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b6000611b9e602183611f57565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611c04603183611f57565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b611c6681612098565b82525050565b6000611c78828561178a565b9150611c84828461178a565b91508190509392505050565b6000602082019050611ca560008301846116fa565b92915050565b6000608082019050611cc060008301876116fa565b611ccd60208301866116fa565b611cda6040830185611c5d565b8181036060830152611cec8184611718565b905095945050505050565b6000602082019050611d0c6000830184611709565b92915050565b60006020820190508181036000830152611d2c8184611751565b905092915050565b60006020820190508181036000830152611d4d816117bb565b9050919050565b60006020820190508181036000830152611d6d81611821565b9050919050565b60006020820190508181036000830152611d8d81611887565b9050919050565b60006020820190508181036000830152611dad816118c7565b9050919050565b60006020820190508181036000830152611dcd8161192d565b9050919050565b60006020820190508181036000830152611ded81611993565b9050919050565b60006020820190508181036000830152611e0d816119f9565b9050919050565b60006020820190508181036000830152611e2d81611a5f565b9050919050565b60006020820190508181036000830152611e4d81611ac5565b9050919050565b60006020820190508181036000830152611e6d81611b2b565b9050919050565b60006020820190508181036000830152611e8d81611b91565b9050919050565b60006020820190508181036000830152611ead81611bf7565b9050919050565b6000602082019050611ec96000830184611c5d565b92915050565b6000604051905081810181811067ffffffffffffffff82111715611ef657611ef561221d565b5b8060405250919050565b600067ffffffffffffffff821115611f1b57611f1a61221d565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611f7e82612098565b9150611f8983612098565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611fbe57611fbd612190565b5b828201905092915050565b6000611fd482612098565b9150611fdf83612098565b925082611fef57611fee6121bf565b5b828204905092915050565b600061200582612098565b915061201083612098565b92508282101561202357612022612190565b5b828203905092915050565b600061203982612078565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156120cf5780820151818401526020810190506120b4565b838111156120de576000848401525b50505050565b600060028204905060018216806120fc57607f821691505b602082108114156121105761210f6121ee565b5b50919050565b600061212182612098565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561215457612153612190565b5b600182019050919050565b600061216a82612098565b915061217583612098565b925082612185576121846121bf565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6122668161202e565b811461227157600080fd5b50565b61227d81612040565b811461228857600080fd5b50565b6122948161204c565b811461229f57600080fd5b50565b6122ab81612098565b81146122b657600080fd5b5056fea2646970667358221220ac7908dd27701bb7fa4e57ccc6adb26c86e50b4deb5adeee897620de659e6d1264736f6c63430008000033";

export class ERC721Upgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Upgradeable {
    return super.attach(address) as ERC721Upgradeable;
  }
  connect(signer: Signer): ERC721Upgradeable__factory {
    return super.connect(signer) as ERC721Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721UpgradeableInterface {
    return new utils.Interface(_abi) as ERC721UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Upgradeable;
  }
}
