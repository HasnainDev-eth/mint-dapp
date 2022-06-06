import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import styled from "styled-components";
import Web3 from "web3";
import Image1 from "../assets/images/006.png";
import Image2 from "../assets/images/009.png";
import Image3 from "../assets/images/0010.png";
import Image4 from "../assets/images/cardImage4.png";

// Ethers
import { ethers, Signer } from "ethers";

// Web3Modal
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Contract
import abi from "../ABI/contract.json";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

const ApeClub = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 88987,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const [totalSupply, setTotalSupply] = useState(0);
  const toEther = (wei) => ethers.utils.formatEther(wei).toString();
  const [provider, setProvider] = useState();
  const [Cost, setCost] = useState(0);
  const [MCost, setMCost] = useState();
  const [account, setaccount] = useState();
  const [fee, setfee] = useState();
  const handleConnection = async () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          chainId: 1,
          rpc: {
            1: "https://mainnet.infura.io/v3/1efdcf784f144a3293de800491c5bf7a",
          },
        },
      },

      injected: {
        display: {
          logo: "https://github.com/MetaMask/brand-resources/raw/master/SVG/metamask-fox.svg",
          name: "MetaMask",
          description: "Connect with MetaMask in your browser",
        },
        package: null,
      },
    };

    const web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
      theme: {
        background: `#000`,
        main: "#fff",
        secondary: "#fff ",
        border: "#000",
        hover: "#000",
      },
    });

    if (provider) {
      web3Modal.clearCachedProvider();
      const acc = await provider.send("eth_requestAccounts", []);
      setaccount(acc[0]);
      console.log("account", account);
    } else {
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection, "any");
      const signer = provider.getSigner();
      //  const acc = await provider.send('eth_requestAccounts', [0]);
      setaccount(signer.getAddress());

      provider.on("accountsChanged", (accounts) => {
        setaccount(accounts[0]);
      });

      provider.on("disconnect", (error) => {
        web3Modal.clearCachedProvider();
        window.location.reload();
      });

      setProvider(provider);
    }
  };
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const getRemaining = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
     "https://mainnet.infura.io/v3/1efdcf784f144a3293de800491c5bf7a"
  
    );

    const contract = new ethers.Contract(
      "0xBCa44d867C707080c504F286C35b237D2802b7E5",
      abi,
      provider
    );
    const total = await contract.totalSupply();
    const _Cost = await contract.price();

    setCost(toEther(_Cost.toString()));

    setTotalSupply(total.toString());
    while (true) {
      await timeout(13000); //for 13 sec delay

      const total = await contract.totalSupply();
      const _Cost = await contract.price();

      setCost(toEther(_Cost.toString()));

      setTotalSupply(total.toString());
    }
  };

  const getMintCost = async () => {
    try {
      const signer = provider.getSigner();
      const acc = await provider.send("eth_requestAccounts", []);
      setaccount(acc[0]);
      console.log("account", account);

      const contract = new ethers.Contract(
        "0xBd4b9f1DEe998d68f47361C98765b94e15DF1ceB",
        abi,
        signer
      );

      const price = await contract.price();
      let bnprice = Web3.utils.fromWei(price.toString(), "ether");
      let weiprice = Web3.utils.toWei(price.toString(), "ether");
      setCost(bnprice);
      setMCost(weiprice);
      console.log("price", bnprice);
    } catch (error) {
      console.log("err", error);
    }
  };

  const mint = async () => {
    try {
      setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
      setClaimingNft(true);

      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        "0xBCa44d867C707080c504F286C35b237D2802b7E5",
        abi,
        signer
      );
      let Tcost = Cost * mintAmount;
      let totalwei = Web3.utils.toWei(Tcost.toString(), "ether");
      let TotalCost = totalwei * mintAmount;
      let _gas = setgas(mintAmount);

      console.log("TotalCost", totalwei);
      console.log("mintAmount", mintAmount);
      const tx = await contract.mint( mintAmount, {
        from: account,
        value: totalwei,
        gasLimit: _gas,
      });

      setFeedback(
        `WOW, the ${CONFIG.NFT_NAME} is yours! Check MetaMask to view it.`
      );
      setClaimingNft(false);
    } catch (error) {
      console.log(error);

      setFeedback("Sorry, something went wrong please try again later.");
      setClaimingNft(false);
    }
  };

  useEffect(() => {
    getRemaining();
  }, []);

  const claimNFTs = () => {
    let cost = data.price;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        maxPriorityFeePerGas: null,
        maxFeePerGas: null,
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! Check MetaMask to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const setgas = (MintAmount) => {
    let gasLimit = CONFIG.GAS_LIMIT;
    if (MintAmount == 1) {
      gasLimit = 111003;
    } else if (MintAmount == 2) {
      gasLimit = 118048;
    } else if (MintAmount == 3) {
      gasLimit = 125094;
    } else if (MintAmount == 4) {
      gasLimit = 132139;
    } else if (MintAmount == 5) {
      gasLimit = 139185;
    } else if (MintAmount == 6) {
      gasLimit = 146230;
    } else if (MintAmount == 7) {
      gasLimit = 153278;
    } else if (MintAmount == 8) {
      gasLimit = 160324;
    } else if (MintAmount == 9) {
      gasLimit = 167370;
    } else if (MintAmount == 10) {
      gasLimit = 174416;
    } else if (MintAmount == 11) {
      gasLimit = 181462;
    } else if (MintAmount == 12) {
      gasLimit = 188508;
    } else if (MintAmount == 13) {
      gasLimit = 195554;
    } else if (MintAmount == 14) {
      gasLimit = 202600;
    } else if (MintAmount == 15) {
      gasLimit = 209640;
    } else if (MintAmount == 16) {
      gasLimit = 216685;
    } else if (MintAmount == 17) {
      gasLimit = 223731;
    } else if (MintAmount == 18) {
      gasLimit = 230776;
    } else if (MintAmount == 19) {
      gasLimit = 237822;
    } else if (MintAmount == 20) {
      gasLimit = 244867;
    }

    return gasLimit;
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
    getMintCost();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  return (
    <div className="ApeClub" id="mint">
      {/* <div className="heroo-container text-center">
        <img src="assets/img/hero.jpeg" alt="click here" className="img-fluid" />
        
      </div> */}
      <div className="container">
        <div className="row apeSection d-flex">
          <div className="col-lg-6 order2 my-4">
            <div className="row apeImages">
              <div className="col-6 mb-4">
                <img className="img-fluid" src={Image3} alt="click here" />
              </div>
              <div className="col-6 mb-4">
                <img className="img-fluid" src={Image4} alt="click here" />
              </div>
              <div className="col-6 mb-4 mb-md-0">
                <img className="img-fluid" src={Image2} alt="click here" />
              </div>
              <div className="col-6 mb-4 mb-md-0">
                <img className="img-fluid" src={Image1} alt="click here" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order1">
            <div className="apeInfo mt-lg-0 mt-md-4">
              {/* <p>
                <strong>Anatomy Science Ape Club </strong>
                is a collection of 8,000 anatomical mortal apes dissected through the organs.
                <span className="d-none d-md-block">Explore what your ape is really made of inside out.</span>
              </p>
              <p className="mb-0">
                First
                <strong> 800 FREE </strong>
                <small>(max. 1 NFT / tx.)</small>
              </p>
              <p>
                Then
                <strong> 0.039 Ξ </strong>
                each
                <small> (max. 20 NFT / tx.)</small>
              </p> */}
              <div className="mintData">
                <p>NFT Minted</p>
                <p>
                  <strong>{totalSupply}</strong> /{" "}
                  <strong>{CONFIG.MAX_SUPPLY}</strong>
                </p>
              </div>
              <div className="mintData">
                <p>Price</p>
                <p>
                  <strong>{Cost * mintAmount} ETH</strong>Ξ
                </p>
              </div>

              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  {/* <p style={{ textAlign: "center", color: "var(--accent-text)" }}>The sale has ended.</p>
                  <p style={{ textAlign: "center", color: "var(--accent-text)" }}>
                    You can still find {CONFIG.NFT_NAME} on
                  </p>
                  <p target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </p> */}
                </>
              ) : (
                <>
                  {/* <p style={{ textAlign: "center", color: "var(--accent-text)" }}>
                    1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}.
                  </p>
                  <p style={{ textAlign: "center", color: "var(--accent-text)" }}>Excluding gas fees.</p> */}
                  {!provider ? (
                    <>
                      {/* <p
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        Connect to the {CONFIG.NETWORK.NAME} network
                      </p> */}
                      {/* <s.SpacerSmall /> */}
                      <a
                        className="btn12 text-center"
                        onClick={(e) => {
                          e.preventDefault();
                          handleConnection();
                          getData();
                        }}
                      >
                        CONNECT WALLET
                      </a>
                      {blockchain.errorMsg !== "" ? (
                        <>
                          <p
                            style={{
                              textAlign: "center",
                              color: "var(--accent-text)",
                            }}
                          >
                            {blockchain.errorMsg}
                          </p>
                        </>
                      ) : null}
                    </>
                  ) : (
                    <>
                      <p
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {feedback}
                      </p>
                      <div className="adding mb-3">
                        <div
                          className="icon me-3"
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          <i class="far fa-minus"></i>
                        </div>
                        <input
                          value={mintAmount}
                          type="text"
                          onChange={(e) =>
                            setMintAmount(Number(e.target.value))
                          }
                        />

                        <div
                          className="icon ms-3"
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          <i class="far fa-plus"></i>
                        </div>
                      </div>
                      <a
                        className="btn form-control"
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          mint();
                        }}
                      >
                        {claimingNft ? "BUSY" : "MINT"}
                      </a>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApeClub;
