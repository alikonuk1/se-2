import { useState } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const ContractInteraction = () => {
  const [nftStandard, setNftStandard] = useState([]);
  const [nftAddress, setNftAddress] = useState([]);
  const [tokenID, setTokenID] = useState([]);
  const [lendAmount, setLendAmount] = useState([]);
  const [maxBorrowDuration, setMaxBorrowDuration] = useState([]);
  const [dailyBorrowPrice, setDailyBorrowPrice] = useState([]);
  const [paymentToken, setPaymentToken] = useState([]);
  const [willAutoRenew, setWillAutoRenew] = useState([]);

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "PxLend",
    functionName: "lend",
    args: [
      nftStandard,
      nftAddress,
      tokenID,
      lendAmount,
      maxBorrowDuration,
      dailyBorrowPrice,
      paymentToken,
      willAutoRenew,
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
  
  const handleLendAmountChange = (e, index) => {
    const newLendAmount = [...lendAmount];
    newLendAmount[index] = Number(e.target.value);
    setLendAmount(newLendAmount);
  };
  
  const handleMaxBorrowDurationChange = (e, index) => {
    const newMaxBorrowDuration = [...maxBorrowDuration];
    newMaxBorrowDuration[index] = Number(e.target.value);
    setMaxBorrowDuration(newMaxBorrowDuration);
  };
  
  const handleDailyBorrowPriceChange = (e, index) => {
    const newDailyBorrowPrice = [...dailyBorrowPrice];
    newDailyBorrowPrice[index] = e.target.value;
    setDailyBorrowPrice(newDailyBorrowPrice);
  };
  
  const handlePaymentTokenChange = (e, index) => {
    const newPaymentToken = [...paymentToken];
    newPaymentToken[index] = Number(e.target.value);
    setPaymentToken(newPaymentToken);
  };

  const handleWillAutoRenewChange = (e, index) => {
    const newWillAutoRenew = [...willAutoRenew];
    newWillAutoRenew[index] = e.target.checked;
    setWillAutoRenew(newWillAutoRenew);
  };

  return (
    <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
      <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
        <span className="text-4xl sm:text-6xl text-black">Lend NFTs</span>
        <div className="mt-4 flex flex-col gap-4">
          {/* Add appropriate input fields for each parameter */}
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
            onChange={(e) => handleNftAddressChange(e, 0)}
          />
          <input
            type="number"
            placeholder="Token ID"
            onChange={(e) => handleTokenIDChange(e, 0)}
          />
          <input
            type="number"
            placeholder="Lend Amount"
            onChange={(e) => handleLendAmountChange(e, 0)}
          />
          <input
            type="number"
            placeholder="Max Borrow Duration"
            onChange={(e) => handleMaxBorrowDurationChange(e, 0)}
          />
          <input
            type="text"
            placeholder="Daily Borrow Price"
            onChange={(e) => handleDailyBorrowPriceChange(e, 0)}
          />
          <input
            type="number"
            placeholder="Payment Token"
            onChange={(e) => handlePaymentTokenChange(e, 0)}
          />
          <label>
            Auto Renew:
            <input
              type="checkbox"
              onChange={(e) => handleWillAutoRenewChange(e, 0)}
            />
          </label>
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
