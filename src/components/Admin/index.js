import React,{useState,useEffect} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import {Button} from "../ButtonElement"
import { fetchData } from "../../redux/data/dataActions";
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider
} from 'styled-dropdown-component';
import { 
    Container, 
   
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    Text2

} from './adminElement'
import Fade from 'react-reveal/Fade';



const Admin = () => {
    const [hidden, setHidden] = useState(true);
    const [cost, setCost] = useState('');
    const [rkonAmount, setRkonAmount] = useState('');
    const [paused, setPaused] = useState('');
    const data = useSelector((state) => state.data);
    const [URI, setURI] = useState('');
    const dispatch = useDispatch();
    const [feedback, setFeedback] = useState('');
    const [settingPrice , setSettingPrice] = useState(false);
    const [network, setNetwork]= useState("");
    const blockchain = useSelector((state) => state.blockchain);
    const [totalPrice, setTotalPrice] = useState("");
    const [isOwner, setIsOwner] = useState(false);
    const { ethereum } = window;
    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
          dispatch(fetchData(blockchain.account));
        }
      
      };
      let networkId =  ethereum.request({
        method: "net_version",
      });
      useEffect(async() => {
        //dispatch(connect());
        // getData();
        networkId = await ethereum.request({
          method: "net_version",
        });
        console.log(`networkId`)
        console.log(networkId);
        if(networkId!=="4"){
          console.log(`true`);
          setNetwork('Switch Network to Rinkeby')
        }else{
          console.log(`false`);
          setNetwork('')
          //setFeedback('NOT GOOD NETWORK')
        }


    
      }, [networkId]);
      
    // function to set the base price
    const setBasePrice = async(_amount) => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      if (_amount < 0) {
        return;
      }
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Setting Base Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .setCost(blockchain.web3.utils.toWei((_amount).toString(), "ether"))
          .send({
            gasLimit: "285000",
            to: "0xd1A1825269C3B89949cB82725Cbe03B4F6a8C15c",
            from: blockchain.account,
            
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty set base price."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    const MintForRKON = (_amount) => {
      if (_amount <= 0) {
        return;
      }
      setFeedback("Minting your NFT...");
      // setClaimingNft(true);
      blockchain.smartContract.methods
        .mintForRKON(blockchain.account, _amount)
        .send({
          gasLimit: "285000",
          to: "0xd1A1825269C3B89949cB82725Cbe03B4F6a8C15c",
          from: blockchain.account,
          value: blockchain.web3.utils.toWei((0).toString(), "ether"),
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          //setClaimingNft(false);
        })
        .then((receipt) => {
          setFeedback(
            "You RKON has been minted, You can visit Open sea to view it."
          );
          //setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };
    const setBaseURI = async(URI1) => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      if(URI==""){
        return;
      }
      owner= owner.toLowerCase();
      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Setting Base Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .setBaseURI(URI1)
          .send({
            gasLimit: "285000",
            to: "0xd1A1825269C3B89949cB82725Cbe03B4F6a8C15c",
            from: blockchain.account,
            
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty set base price."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
    const pauseContract = async() => {
    
      let owner = await blockchain.smartContract.methods.owner().call();
      let paused2 = await blockchain.smartContract.methods.paused().call();

      owner= owner.toLowerCase();

      let account = blockchain.account.toLowerCase();
      if(owner ==  account){
        console.log(owner, blockchain.account);
        setFeedback("Setting Base Price...");
        setSettingPrice(true);
        blockchain.smartContract.methods
          .pause(!paused2)
          .send({
            gasLimit: "285000",
            to: "0xd1A1825269C3B89949cB82725Cbe03B4F6a8C15c",
            from: blockchain.account,
            
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setSettingPrice(false);
          })
          .then((receipt) => {
            setFeedback(
              "Succesfullty set base price."
            );
            setSettingPrice(false);
            dispatch(fetchData(blockchain.account));
          });
      }else{
        alert(`you are not the owner`);
      }
    }
     

    // };
    const sleepwm = (ms = 0) => {
      return new Promise(r => setTimeout(r, ms));
  };
    useEffect(async() => {
    
      try{
      let owner1 = await blockchain.smartContract.methods.owner().call();
      let account = blockchain.account
      owner1= owner1.toLowerCase();
      account = account.toLowerCase();

    if (owner1 == account){

        console.log(`in condition`);
        setIsOwner(true);
        
      }else{
       
      }
    }catch(e){
      setIsOwner(false);
    }
      
  
    }, [blockchain.account]);
  
      useEffect(async() => {

        getData();
        try{
          let val = await blockchain.smartContract.methods.cost().call();
          let state = await blockchain.smartContract.methods.paused().call();
  

          setCost(val/1000000000000000000);
          setPaused(state);
        }catch(e){

        }
      
    
      }, [blockchain.account]);

    return (
        <Container id="traits">
           <div style={{marginTop:'150px'}}>
               <div className="row">
                <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                    <Form action='#' style={{width:"350px"}}>
                     
                        <Text2>Set Unit Price For RKON </Text2>
                        <FormInput 
                        type="number"
                        value={totalPrice}
                        onChange={e=>{
                         

                            setTotalPrice(e.target.value)
                          
                          console.log(totalPrice)
                          
                        }}
                        />
                        <Text2>Current Price: {cost}</Text2>
                        {blockchain.account === "" ||
                     blockchain.smartContract === null ? (
                      <>
                        <Button type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >Connect</Button>
                        <Text>Connect to Ethereum Mainnet<br/></Text>
                        
                      </>
                  ):
                    ( 
                    <>
                    <Button type="submit"
                 
                    onClick={(e) => {
                        e.preventDefault();
                        setBasePrice(totalPrice);
                  
                        getData();
                      }}
                    > {"Set Price"}</Button>
                    
                
                  
                 

                    </>
                    )}
                    
                   
                      
                    </Form>
                    </div>
                    <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                    <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Set Base URI</Text2>
                     <FormInput 
                     type="text"
                     value={URI}
                     onChange={e=>{
                   

                        setURI(e.target.value)
                       
                       console.log(URI)
                       
                     }}
                     />
                     <Text2>Set Your Base Uri HERE</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
                     setBaseURI(URI);
                     getData();
                   }}
                 > {"Set Base URI"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Mint For RKON</Text2>
                     <FormInput 
                     type="number"
                     value={rkonAmount}
                     onChange={e=>{
                       if(e.target.value > 0 && e.target.value <=25){

                        setRkonAmount(e.target.value)
                       }
                       console.log(rkonAmount)
                       
                     }}
                     />
                     <Text2></Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
               
                    MintForRKON(rkonAmount);
                     getData();
                   }}
                 > {"Mint For RKON"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 
                 </div>
                 <div className="row">
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Transfer OwnerShip</Text2>
                     <FormInput 
                     type="number"
                     value={totalPrice}
                     onChange={e=>{
                       if(e.target.value > 0 && e.target.value <=25){

                         setTotalPrice(e.target.value)
                       }
                       console.log(totalPrice)
                       
                     }}
                     />
                     <Text2>Current Owner: scar</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
               
               
                     getData();
                   }}
                 > {"Transfer OwnerShip"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Add User to WhiteList</Text2>
                     <FormInput 
                     type="number"
                     value={totalPrice}
                     onChange={e=>{
                       if(e.target.value > 0 && e.target.value <=25){

                         setTotalPrice(e.target.value)
                       }
                       console.log(totalPrice)
                       
                     }}
                     />
                     <Text2>White Listed will not be charged</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
               
               
                     getData();
                   }}
                 > {"WhiteList User"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Withdraw Amount</Text2>
                     <FormInput 
                     type="number"
                     value={totalPrice}
                     onChange={e=>{
                       if(e.target.value > 0 && e.target.value <=25){

                         setTotalPrice(e.target.value)
                       }
                       console.log(totalPrice)
                       
                     }}
                     />
                     <Text2>Available Amount: 20</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
               
               
                     getData();
                   }}
                 > {"Withdraw Amount"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 </div>
                 <div className="row">
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Transfer Token</Text2>
                     <FormInput 
                     type="number"
                     value={totalPrice}
                     onChange={e=>{
                       if(e.target.value > 0 && e.target.value <=25){

                         setTotalPrice(e.target.value)
                       }
                       console.log(totalPrice)
                       
                     }}
                     />
                     <Text2>Transfer Token to someone</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
               
               
                     getData();
                   }}
                 > {"Transfer Token"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Remove WhiteList</Text2>
                     <FormInput 
                     type="number"
                     value={totalPrice}
                     onChange={e=>{
                       if(e.target.value > 0 && e.target.value <=25){

                         setTotalPrice(e.target.value)
                       }
                       console.log(totalPrice)
                       
                     }}
                     />
                     <Text2>Remove User from whiteList</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
               
               
                     getData();
                   }}
                 > {"Mint For RKON"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
                 <Form action='#' style={{width:"350px"}}>
                     
                     <Text2>Pause Contract</Text2>
                
                     <Text2>Current State: {paused? "True":"False"}</Text2>
                     {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                   <>
                     <Button type="submit"
                     style={{}}
                     onClick={(e) => {
                         e.preventDefault();
                         dispatch(connect());
                         getData();
                       }}
                     >Connect</Button>
                     <Text>Connect to Ethereum Mainnet<br/></Text>
                     
                   </>
               ):
                 ( 
                 <>
                 <Button type="submit"
              
                 onClick={(e) => {
                     e.preventDefault();
                     getData();
                     pauseContract();
                     
                   }}
                 > {"Pause Contract"}</Button>
                 
             
               
              

                 </>
                 )}
                 
                
                   
                 </Form>
                 </div>
                 </div>
             
          
                  
{/*                    
                    <Text>{data.totalSupply}/2500</Text> */}
                 
                </div>
         </Container>
    )

}
export default Admin
