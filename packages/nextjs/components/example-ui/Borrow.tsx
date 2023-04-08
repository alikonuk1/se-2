import { useState } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const ContractInteraction = () => {
  const [nftStandard, setNftStandard] = useState([0]);
  const [nftAddress, setNftAddress] = useState([""]);
  const [tokenID, setTokenID] = useState([0]);
  const [lendingID, setLendingID] = useState([0]);
  const [borrowDuration, setBorrowDuration] = useState([0]);
  const [borrowAmount, setBorrowAmount] = useState([0]);

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "PxLend",
    functionName: "borrow",
    args: [
      nftStandard,
      nftAddress,
      tokenID,
      lendingID,
      borrowDuration,
      borrowAmount,
    ],
  });

  const handleNftStandardChange = (e, index) => {
    const newNftStandard = [...nftStandard];
    newNftStandard[index] = e.target.checked ? 1 : 0;
    setNftStandard(newNftStandard);
  };
  
  const handleNftAddressChange = (e, index) => {
    const newNftAddress = [...nftAddress];
    newNftAddress[index] = e.target.value;
    setNftAddress(newNftAddress);
  };

  const handleTokenIDChange = (e, index) => {
    const newTokenID = [...tokenID];
    newTokenID[index] = Number(e.target.value);
    setTokenID(newTokenID);
  };
  
  const handleLendingIDChange = (e, index) => {
    const newLendingID = [...lendingID];
    newLendingID[index] = Number(e.target.value);
    setLendingID(newLendingID);
  };
  
  const handleBorrowDurationChange = (e, index) => {
    const newBorrowDuration = [...borrowDuration];
    newBorrowDuration[index] = Number(e.target.value);
    setBorrowDuration(newBorrowDuration);
  };
  
  const handleBorrowAmountChange = (e, index) => {
    const newBorrowAmount = [...borrowAmount];
    newBorrowAmount[index] = e.target.value;
    setBorrowAmount(newBorrowAmount);
  };

  return (
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
          <span className="text-4xl sm:text-6xl text-black">Borrow NFTs</span>
  
          <div className="mt-4 flex flex-col gap-4">
            {/* Add appropriate input fields for each parameter of the borrow function */}
            {/* NFT Standard toggle switch */}
            {/* ... */}
            <div className="flex items-center">
            <span className="mr-4">NFT Standard:</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={nftStandard[0] === 1}
                onChange={(e) => handleNftStandardChange(e, 0)}
              />
              <span className="slider round"></span>
            </label>
            <span className="ml-4">{nftStandard[0] === 0 ? "E721" : "E1155"}</span>
          </div>
            <input
              type="text"
              placeholder="NFT Address"
              className="w-full sm:w-1/2 md:w-1/3"
              onChange={(e) => handleNftAddressChange(e, 0)}
            />
            <input
              type="number"
              placeholder="Token ID"
              className="w-full sm:w-1/2 md:w-1/3"
              onChange={(e) => handleTokenIDChange(e, 0)}
            />
            <input
              type="number"
              placeholder="Lending ID"
              className="w-full sm:w-1/2 md:w-1/3"
              onChange={(e) => handleLendingIDChange(e, 0)}
            />
            <input
              type="number"
              placeholder="Borrow Duration"
              className="w-full sm:w-1/2 md:w-1/3"
              onChange={(e) => handleBorrowDurationChange(e, 0)}
            />
            <input
              type="number"
              placeholder="Borrow Amount"
              className="w-full sm:w-1/2 md:w-1/3"
              onChange={(e) => handleBorrowAmountChange(e, 0)}
            />
          </div>
  
          <div className="mt-4 flex flex-col items-center gap-4">
            <button
              className={`btn btn-primary ${
                isLoading ? "loading" : ""
              }`}
              onClick={writeAsync}
            >
              {!isLoading && (
                <>
                  Send <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                </>
              )}
            </button>
          </div>
        </div>
    </div>
  );  
};
