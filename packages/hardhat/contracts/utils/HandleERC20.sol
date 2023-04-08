// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {IERC20} from "./IERC20.sol";

contract HandleERC20 {
    error NotSuccessful();

    function transferToken(address wantToken, address from, address to, address protocol, uint256 amount, uint256 fee)
        internal
    {
        IERC20 token = IERC20(wantToken);

        require(token.balanceOf(from) >= amount + fee, "Not enough balance");

        if (!(token.transferFrom(from, to, amount))) {
            revert NotSuccessful();
        }
        if (!(token.transferFrom(from, protocol, fee))) {
            revert NotSuccessful();
        }
    }
}
