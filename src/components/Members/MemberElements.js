import styled from "styled-components";

export const RoadContainer = styled.div`
    color: #fff;
    background: ${({lightBg})=>(lightBg? '#0b0e11' : '#0b0e11')};
    
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }


    @media screen and (max-width: 480px){
        height: 2600px;
    }
    @media screen and (max-width: 540px){
        height: 2900px;
    }
   
`;

export const RoadWrapper = styled.div`
    
    z-index: 0;
    height: 1200px;
    display: flex ;
    width: 100%;


    // max-width: 1400px;
    // margin-right: auto;
    margin-left: 0;
    // padding: 0 24px;
    @media screen and (max-width: 480px){
        height: 2500px;
    }
    
`;
export const LeftDiv = styled.div`
    margin-top: auto;       
    height: 80%;
    
  
    width: 10%;
    background: yellow;
`
export const ImageArea = styled.div`
    height: 100%;

    width: 600px;
    background: red;
`
export const ImageArea2 = styled.div`
   
    height: 100%;
    display: flex;
    margin-left: 100px;
    width: 50%;
    
    background: red;
`
export const InfoRow = styled.div`
    display: grid;
  //  grid-auto-columns: minmax(auto,5fr);
    grid-column-gap: 10px;

    grid-template-areas:  'col2 col1 col3 col4';


`;