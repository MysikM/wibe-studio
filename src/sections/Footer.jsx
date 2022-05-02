import React from 'react';
import styled from "styled-components";
import logo from '../assets/Svgs/star_white_48dp.svg';
import {motion} from "framer-motion";
import {useLocomotiveScroll} from "react-locomotive-scroll";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img{
    width: 10vw;
    height: auto;
  }
  
  h3{
    font-size: ${props=> props.theme.fontxxl};
    font-family: "Kaushan Script", sans-serif;
    
    @media (max-width: 48em) {
      font-size: ${props=> props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 2rem 2rem;
    padding: 0 1rem;
    border-top: 1px solid ${props => props.theme.text};
    border-bottom: 1px solid ${props => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }
  
  li{
    padding: 2rem;
    font-size: ${props=> props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover{
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${props=> props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${props => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    span{
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontmd};
  }
`;

const Footer = () => {
    const {scroll} = useLocomotiveScroll();
    const handleScroll =(id) => {
        let elem = document.querySelector(id);

        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25, 0.0, 0.35, 1.0],
            }
            )
    }
    return (
        <Section>
            <LogoContainer>
                <img
                    data-scroll data-scroll-speed='2'
                    src={logo} alt="Wibe Studio"/>
                <h3
                    data-scroll data-scroll-speed='-1'
                >Wibe Studio</h3>
            </LogoContainer>
            <FooterComponent
                initial={{y: '-400px'}}
                whileInView={{y:0}}
                viewport={{once: false}}
                transition={{duration: 1.5}}
            >
                <ul>
                    <li onClick={()=>handleScroll('#home')}>home</li>
                    <li onClick={()=>handleScroll('.about')}>about</li>
                    <li onClick={()=>handleScroll('#shop')}>shop</li>
                    <li onClick={()=>handleScroll('#new-arrival')}>new arrival</li>
                    <li>
                        <a href="#">
                            look book
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            review
                        </a>
                    </li>
                </ul>
                <Bottom>
                    <span
                        data-scroll data-scroll-speed='2' data-scroll-direction='horizontal'
                    >&copy; {new Date().getFullYear()}. All Rights Reserved</span>
                    <span
                        data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'
                    >Made with &hearts; by &nbsp;
                            <a href="https://t.me/mysik_3301" target='_blank'>
                            Mysik
                        </a>
                    </span>
                </Bottom>
            </FooterComponent>
        </Section>
    );
};

export default Footer;