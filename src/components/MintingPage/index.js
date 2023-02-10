import React,{useEffect,useState} from 'react'
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

} from './MintingPageElements'
import { fetchData } from "../../redux/data/dataActions";
import styled from "styled-components";
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import logo from '../../images/logo.png'
const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #DA0000;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FFF;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none ;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #da0000 !important;
    }
`;
export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'black' : 'red')};
    white-space: nowrap;
    padding: ${({big})=> (big? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark? '#FFF' : '#fff')} !important;
    font-size: ${({fontBig})=> (fontBig? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> primary? '#fff' : 'black'} ;
        color: ${({dark})=> (dark? 'black' : '#fff')} !important;
   
    }
`
const MintingPage = ({claimNFTs,feedback,setFeedback,claimingNft,setClaimingNft}) => {
  const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [network, setNetwork]= useState("");
    const blockchain = useSelector((state) => state.blockchain);
    const [totalNFTS, setTotalNFTs] = useState(1);
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
      
    //function to set the base price
    // const setBasePrice = async(_amount) => {
    //   const owner = await blockchain.smartContract.methods.owner().call();
    //   if (_amount < 0) {
    //     return;
    //   }
    //   if(owner ==  blockchain.account){
    //     console.log(owner, blockchain.account);
    //     setFeedback("Setting Base Price...");
    //     setClaimingNft(true);
    //     blockchain.smartContract.methods
    //       .setCost(_amount)
    //       .send({
    //         gasLimit: "285000",
    //         to: "0xa404f9D80681DC2678d6fEb202Cb625D724ee344",
    //         from: blockchain.account,
            
    //       })
    //       .once("error", (err) => {
    //         console.log(err);
    //         setFeedback("Sorry, something went wrong please try again later.");
    //         setClaimingNft(false);
    //       })
    //       .then((receipt) => {
    //         setFeedback(
    //           "Succesfullty set base price."
    //         );
    //         setClaimingNft(false);
    //         dispatch(fetchData(blockchain.account));
    //       });
    //   }else{
    //     alert(`you are not the owner`);
    //   }
 
     

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
  
      useEffect(() => {

        getData();
    
      }, [blockchain.account]);


    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">
                  
                <img style={{height:"150px", width:"150px"}} src={logo}/> 
                
                </Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Mint Your Strawbeary Club</FormH1>
                        <Text2>25 LIMIT PER TRANSACTION</Text2>
                        <FormInput 
                        type="number"
                        value={totalNFTS}
                        onChange={e=>{
                          if(e.target.value > 0 && e.target.value <=25){

                            setTotalNFTs(e.target.value)
                          }
                          console.log(totalNFTS)
                          
                        }}
                        />
                        <Text2>0.08 ETH</Text2>
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
                    disabled={claimingNft ? 1 : 0}
                    onClick={(e) => {
                        e.preventDefault();
                  
                        claimNFTs(totalNFTS);
                        getData();
                      }}
                    > {claimingNft ? "Minting" : "Mint"}</Button>
                    
                    <Text>
                      {feedback}<br/>
              
                      
                   </Text>
                
                  
                 

                    </>
                    )}
                    
                   
                      
                    </Form>
                    <Text>
                   {network}
                   </Text>
                   {isOwner?
                     <Text><NavBtnLink to="/manage" style={{borderRadius:"50px",
                     background:"#DA000",
                     color:"#FFF",
                     fontSize:"16px",
                     outline: "none",
                     cursor:"pointer",
                     border:'none',
                     display: "inline",
                     width:"90px"
 
                   }}>MANGE</NavBtnLink> </Text>:""
                  }
                  
                   
                    <Text>{data.totalSupply}/2500</Text>
                 
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )           
}

export default  MintingPage