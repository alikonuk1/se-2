const contracts = {
  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        PxLend: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "beneficiary_",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "BORROWED",
              type: "error",
            },
            {
              inputs: [],
              name: "CANT_RESET",
              type: "error",
            },
            {
              inputs: [],
              name: "CRITICAL_ERROR",
              type: "error",
            },
            {
              inputs: [],
              name: "DIDNT_BORROWED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_AMOUNT",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_PRICE",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SCALE",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_STANDARD",
              type: "error",
            },
            {
              inputs: [],
              name: "L_ZERO_PAYMENT",
              type: "error",
            },
            {
              inputs: [],
              name: "MAX_DURATION",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_BORROWER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_LENDER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_UINT16",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_UINT8",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ZERO",
              type: "error",
            },
            {
              inputs: [],
              name: "NO_NFTS",
              type: "error",
            },
            {
              inputs: [],
              name: "ONLY_ONE",
              type: "error",
            },
            {
              inputs: [],
              name: "OWN_NFT",
              type: "error",
            },
            {
              inputs: [],
              name: "PAST_RETURN_DATE",
              type: "error",
            },
            {
              inputs: [],
              name: "R_ZERO_PAYMENT",
              type: "error",
            },
            {
              inputs: [],
              name: "TOKEN_SENTINEL",
              type: "error",
            },
            {
              inputs: [],
              name: "WAIT_RETURN_DATE",
              type: "error",
            },
            {
              inputs: [],
              name: "WRONG_FEE",
              type: "error",
            },
            {
              inputs: [],
              name: "WRONG_TOKEN",
              type: "error",
            },
            {
              inputs: [],
              name: "ZERO",
              type: "error",
            },
            {
              inputs: [],
              name: "ZERO_PRICE",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "borrowingID",
                  type: "uint256",
                },
              ],
              name: "Borrow",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "borrowingID",
                  type: "uint256",
                },
              ],
              name: "BorrowClaimed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "lendingID",
                  type: "uint256",
                },
              ],
              name: "Lend",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "borrowingID",
                  type: "uint256",
                },
              ],
              name: "StopBorrow",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "lendingID",
                  type: "uint256",
                },
              ],
              name: "StopLend",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_lendingID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint8[]",
                  name: "borrowDuration",
                  type: "uint8[]",
                },
                {
                  internalType: "uint256[]",
                  name: "borrowAmount",
                  type: "uint256[]",
                },
              ],
              name: "borrow",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "borrowFee",
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
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_lendingID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_borrowingID",
                  type: "uint256[]",
                },
              ],
              name: "claimBorrow",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "nftAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_borrowingID",
                  type: "uint256",
                },
              ],
              name: "getBorrowing144DC65D",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "nftAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_lendingID",
                  type: "uint256",
                },
              ],
              name: "getLending9CFF8D4",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "lendAmount",
                  type: "uint256[]",
                },
                {
                  internalType: "uint8[]",
                  name: "maxBorrowDuration",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes4[]",
                  name: "dailyBorrowPrice",
                  type: "bytes4[]",
                },
                {
                  internalType: "uint8[]",
                  name: "paymentToken",
                  type: "uint8[]",
                },
                {
                  internalType: "bool[]",
                  name: "willAutoRenew",
                  type: "bool[]",
                },
              ],
              name: "lend",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155BatchReceived",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC721Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
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
                  internalType: "address payable",
                  name: "beneficiary_",
                  type: "address",
                },
              ],
              name: "setBeneficiary",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "borrowFee_",
                  type: "uint256",
                },
              ],
              name: "setBorrowFee",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "paymentToken",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "t",
                  type: "address",
                },
              ],
              name: "setPaymentToken",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_lendingID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_borrowingID",
                  type: "uint256[]",
                },
              ],
              name: "stopBorrow",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_lendingID",
                  type: "uint256[]",
                },
              ],
              name: "stopLend",
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
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      name: "sepolia",
      chainId: "11155111",
      contracts: {
        PxLend: {
          address: "0x0833a100823c6f5e6D37A06ac7f030578F25d659",
          abi: [
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "beneficiary_",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "BORROWED",
              type: "error",
            },
            {
              inputs: [],
              name: "CANT_RESET",
              type: "error",
            },
            {
              inputs: [],
              name: "CRITICAL_ERROR",
              type: "error",
            },
            {
              inputs: [],
              name: "DIDNT_BORROWED",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_AMOUNT",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_PRICE",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_SCALE",
              type: "error",
            },
            {
              inputs: [],
              name: "INVALID_STANDARD",
              type: "error",
            },
            {
              inputs: [],
              name: "L_ZERO_PAYMENT",
              type: "error",
            },
            {
              inputs: [],
              name: "MAX_DURATION",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_BORROWER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_LENDER",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_UINT16",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_UINT8",
              type: "error",
            },
            {
              inputs: [],
              name: "NOT_ZERO",
              type: "error",
            },
            {
              inputs: [],
              name: "NO_NFTS",
              type: "error",
            },
            {
              inputs: [],
              name: "ONLY_ONE",
              type: "error",
            },
            {
              inputs: [],
              name: "OWN_NFT",
              type: "error",
            },
            {
              inputs: [],
              name: "PAST_RETURN_DATE",
              type: "error",
            },
            {
              inputs: [],
              name: "R_ZERO_PAYMENT",
              type: "error",
            },
            {
              inputs: [],
              name: "TOKEN_SENTINEL",
              type: "error",
            },
            {
              inputs: [],
              name: "WAIT_RETURN_DATE",
              type: "error",
            },
            {
              inputs: [],
              name: "WRONG_FEE",
              type: "error",
            },
            {
              inputs: [],
              name: "WRONG_TOKEN",
              type: "error",
            },
            {
              inputs: [],
              name: "ZERO",
              type: "error",
            },
            {
              inputs: [],
              name: "ZERO_PRICE",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "borrowingID",
                  type: "uint256",
                },
              ],
              name: "Borrow",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "borrowingID",
                  type: "uint256",
                },
              ],
              name: "BorrowClaimed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "lendingID",
                  type: "uint256",
                },
              ],
              name: "Lend",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "borrowingID",
                  type: "uint256",
                },
              ],
              name: "StopBorrow",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "lendingID",
                  type: "uint256",
                },
              ],
              name: "StopLend",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_lendingID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint8[]",
                  name: "borrowDuration",
                  type: "uint8[]",
                },
                {
                  internalType: "uint256[]",
                  name: "borrowAmount",
                  type: "uint256[]",
                },
              ],
              name: "borrow",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "borrowFee",
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
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_lendingID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_borrowingID",
                  type: "uint256[]",
                },
              ],
              name: "claimBorrow",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "nftAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_borrowingID",
                  type: "uint256",
                },
              ],
              name: "getBorrowing144DC65D",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "nftAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenID",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_lendingID",
                  type: "uint256",
                },
              ],
              name: "getLending9CFF8D4",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "lendAmount",
                  type: "uint256[]",
                },
                {
                  internalType: "uint8[]",
                  name: "maxBorrowDuration",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes4[]",
                  name: "dailyBorrowPrice",
                  type: "bytes4[]",
                },
                {
                  internalType: "uint8[]",
                  name: "paymentToken",
                  type: "uint8[]",
                },
                {
                  internalType: "bool[]",
                  name: "willAutoRenew",
                  type: "bool[]",
                },
              ],
              name: "lend",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155BatchReceived",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC721Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
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
                  internalType: "address payable",
                  name: "beneficiary_",
                  type: "address",
                },
              ],
              name: "setBeneficiary",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "borrowFee_",
                  type: "uint256",
                },
              ],
              name: "setBorrowFee",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "paymentToken",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "t",
                  type: "address",
                },
              ],
              name: "setPaymentToken",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_lendingID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_borrowingID",
                  type: "uint256[]",
                },
              ],
              name: "stopBorrow",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "enum ILendData.NFTStandard[]",
                  name: "nftStandard",
                  type: "uint8[]",
                },
                {
                  internalType: "address[]",
                  name: "nftAddress",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "tokenID",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_lendingID",
                  type: "uint256[]",
                },
              ],
              name: "stopLend",
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
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
