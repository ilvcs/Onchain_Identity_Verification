// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {ERC20} from '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import {PrimitiveTypeUtils} from '@iden3/contracts/lib/PrimitiveTypeUtils.sol';
import {ICircuitValidator} from '@iden3/contracts/interfaces/ICircuitValidator.sol';
import {UniversalVerifier} from '@iden3/contracts/verifiers/UniversalVerifier.sol';

contract ZKAirdropVerifier is ERC20 {
   uint64 public constant REQUEST_ID = 1717138597;

   UniversalVerifier public verifier;

   uint256 public TOKEN_AMOUNT_FOR_AIRDROP_PER_ID = 5 * 10 ** uint256(decimals());

   // mapping(address => bool) public isClaimed;

   modifier beforeTokenTransfer(address to) {
      // only one airdrop per address is allowed
      // require(
      //    !isClaimed[to],
      //    'only one airdrop per address is allowed'
      // );

      require(
         verifier.getProofStatus(to, REQUEST_ID).isVerified ,
         'only identities who provided sig or mtp proof for transfer requests are allowed to receive tokens'
      );
      _;
   }

   constructor(
      UniversalVerifier verifier_,
      string memory name_,
      string memory symbol_
   ) ERC20(name_, symbol_) {
      verifier = verifier_;
   }

   function mint(address _to) public {
      
      //require(_to == tx.origin, 'only EOA can mint');
      require(_to != address(0), 'invalid address');
      _mint(_to, TOKEN_AMOUNT_FOR_AIRDROP_PER_ID);
      // mark the address as claimed
      // isClaimed[msg.sender] = true;
   }

   function _update(
      address from,
      address to,
      uint256 value
   ) internal override beforeTokenTransfer(to) {
      super._update(from, to, value);
   }
}