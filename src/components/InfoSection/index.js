import React from 'react';
import {Button} from '../ButtonElement';
import Zoom from 'react-reveal/Zoom';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
   
} from './InfoElements';
import logo from '../../images/crypto.svg'; // Tell webpack this JS file uses this image
import collec from '../../images/collection.svg'; // Tell webpack this JS file uses this image


const InfoSection = ({
    lightBg,
    primary,
    dark,
    dark2,
    id,
    imgStart,
    topLine, 
    lightText, 
    Headline,
    darkText,
    description,
     buttonLabel,
    img2, 
    alt
}) => {
    return (
        <> 
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper >
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <Zoom >
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{Headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary?1:0}
                                dark={dark?1:0}
                                dark2={dark2?1:0}
                            >{buttonLabel}</Button>
                         
                        </BtnWrap>
                    </TextWrapper>
                    </Zoom>
                    </Column1>
                    <Column2>
                    <Zoom >
                        <ImgWrap>
                            <Img src={id=="about" ? collec : logo} alt=  {alt} />
                        </ImgWrap>
                        </Zoom>
                    </Column2>
                </InfoRow>
            </InfoWrapper>

        </InfoContainer>
            
        </>
    )
}

export default InfoSection;
