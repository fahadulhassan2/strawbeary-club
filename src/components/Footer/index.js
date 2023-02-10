import React from 'react'
import {Link} from 'react-router-dom';
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaReddit, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterLink,
    FooterContainer,
    FooterLinkItems,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinksContainer,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
  
} from './FooterElements'
import openSea from "../../images/logos/open.png"
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    {/* <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">Partners</FooterLink>
                            <FooterLink to="/signin">How we work?</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">Partners</FooterLink>
                            <FooterLink to="/signin">How we work?</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">Partners</FooterLink>
                            <FooterLink to="/signin">How we work?</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>
                    
                    <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">Partners</FooterLink>
                            <FooterLink to="/signin">How we work?</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>
                    
                 */}
                </FooterLinksWrapper>
                </FooterLinksContainer>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                <img style={{height:"150px", width:"150px"}} src={logo}/> 
                </SocialLogo>
               
                <WebsiteRights>
                       © {new Date().getFullYear()}   All rights reserved.
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                        <FaTelegram/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Reddit">
                        <FaReddit/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Discord">
                        <FaDiscord/>
                    </SocialIconLink>
                    
                        {/* <FaOpenSea/> */}
                      
                       
                  
                  
                </SocialIcons>
             
             
                
            </SocialMediaWrap>
            <div className="text-center mt-4">
           
            <Link>
                    <img style={{height:"20%", width:"15%"}} src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).svg"/>
                     
            </Link>
          
            </div>
            <SocialLogo className="mt-4" to='/terms'>
                <p>Terms & Conditions</p>
            </SocialLogo>
           
          
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer
