import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav,Dark})=> (scrollNav? (Dark? '#fff' : "black") : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8x all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 10px;
    max-width: 1100px;
`

export const NavLogo = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none !important;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    display: ${({hide})=> (hide? 'none' : '')};
`

export const NavLinks = styled(LinkS)`
    color: ${({Dark}) => (Dark ? 'black' : 'white')};
    display: flex;
    align-items: center;
    text-decoration: none !important;
    padding: 0 1rem;
    height: 120%;
    cursor: pointer;
 
    &:hover {
        color : #ff6a75 !important;
    }    
    &.active {
        border-bottom: 3px solid #ff6a75 !important;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    &:hover {
        color : #ff6a75 !important;
    } 
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #ff6a75;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none ;
    color: ${({Dark}) => (Dark ? 'black' : 'white')};
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #da0000 !important;
    }
`;

export const NavLinks2 = styled(LinkR)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none !important;
    padding: 0 0rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #DAC90D;
    }
`;



