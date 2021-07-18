/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HasSecondarySaleFees,
  HasSecondarySaleFeesInterface,
} from "../HasSecondarySaleFees";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getFeeBps",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getFeeRecipients",
    outputs: [
      {
        internalType: "address payable[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105d6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a7146100465780630ebd4c7f14610076578063b9c4d9fb146100a6575b600080fd5b610060600480360381019061005b91906102c2565b6100d6565b60405161006d9190610471565b60405180910390f35b610090600480360381019061008b91906102eb565b610140565b60405161009d919061044f565b60405180910390f35b6100c060048036038101906100bb91906102eb565b6101d1565b6040516100cd919061042d565b60405180910390f35b60007fb7799584000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600060036000848152602001908152602001600020805490501161016757600161017b565b600360008381526020019081526020016000205b8054806020026020016040519081016040528092919081815260200182805480156101c557602002820191906000526020600020905b8154815260200190600101908083116101b1575b50505050509050919050565b606060006002600084815260200190815260200160002080549050116101f857600061020c565b600260008381526020019081526020016000205b80548060200260200160405190810160405280929190818152602001828054801561028c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610242575b50505050509050919050565b6000813590506102a781610572565b92915050565b6000813590506102bc81610589565b92915050565b6000602082840312156102d457600080fd5b60006102e284828501610298565b91505092915050565b6000602082840312156102fd57600080fd5b600061030b848285016102ad565b91505092915050565b60006103208383610344565b60208301905092915050565b6000610338838361041e565b60208301905092915050565b61034d816104fe565b82525050565b600061035e826104ac565b61036881856104dc565b93506103738361048c565b8060005b838110156103a457815161038b8882610314565b9750610396836104c2565b925050600181019050610377565b5085935050505092915050565b60006103bc826104b7565b6103c681856104ed565b93506103d18361049c565b8060005b838110156104025781516103e9888261032c565b97506103f4836104cf565b9250506001810190506103d5565b5085935050505092915050565b61041881610510565b82525050565b61042781610568565b82525050565b600060208201905081810360008301526104478184610353565b905092915050565b6000602082019050818103600083015261046981846103b1565b905092915050565b6000602082019050610486600083018461040f565b92915050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061050982610548565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61057b8161051c565b811461058657600080fd5b50565b61059281610568565b811461059d57600080fd5b5056fea2646970667358221220a1201af340db6cba9f7e8a11e4e2119538c7e9a93bf051b407574b8307d06d4c64736f6c63430008000033";

export class HasSecondarySaleFees__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HasSecondarySaleFees> {
    return super.deploy(overrides || {}) as Promise<HasSecondarySaleFees>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HasSecondarySaleFees {
    return super.attach(address) as HasSecondarySaleFees;
  }
  connect(signer: Signer): HasSecondarySaleFees__factory {
    return super.connect(signer) as HasSecondarySaleFees__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HasSecondarySaleFeesInterface {
    return new utils.Interface(_abi) as HasSecondarySaleFeesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HasSecondarySaleFees {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as HasSecondarySaleFees;
  }
}