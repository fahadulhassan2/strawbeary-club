import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({Dark}) => (Dark ? '#45e9fd' : ' #764fcd')};
    white-space: nowrap;
    padding: ${({big})=> (big? '14px 48px' : '10px 30px')};
    color: ${({Dark})=> (Dark? '#00000' : '#fff')} !important;
    font-size: ${({fontBig})=> (fontBig? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> primary? '#fff' : '#DAC90D'} ;
        color: ${({Dark})=> (Dark? 'black' : '#fff')} !important;
   
    }
`