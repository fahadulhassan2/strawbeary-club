import React,{useState,useEffect} from 'react'
import MintingPage from '../components/MintingPage'

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

const SigninPage = () => {
    const dispatch = useDispatch();
    //const [feedback, setError] = useState("");
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("Click to Mint Your RKON.");
    const [claimingNft, setClaimingNft] = useState(false);

    // const withdraw = () =>{
    //   blockchain.smartContract.methods
    //   .withdraw();
    // }

    const claimNFTs = (_amount) => {
        if (_amount <= 0) {
          return;
        }
        setFeedback("Minting your NFT...");
        setClaimingNft(true);
        blockchain.smartContract.methods
          .mint(blockchain.account, _amount)
          .send({
            gasLimit: "285000",
            to: "0xd1A1825269C3B89949cB82725Cbe03B4F6a8C15c",
            from: blockchain.account,
            value: blockchain.web3.utils.toWei((0.08 * _amount).toString(), "ether"),
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setClaimingNft(false);
          })
          .then((receipt) => {
            setFeedback(
              "You RKON has been minted, You can visit Open sea to view it."
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
          });
      };
      const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          dispatch(fetchData(blockchain.account));
        }
      };
      useEffect(() => {
        getData();
      }, [blockchain.account]);



    return (
        <div>
            <MintingPage feedback={feedback} setFeedback={setFeedback} claimingNft={claimingNft} setClaimingNft={setClaimingNft} claimNFTs={claimNFTs} />
        </div>
    )
}

export default SigninPage
