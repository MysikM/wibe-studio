import React from 'react';
import styled from 'styled-components';
import CoverVideo from "../components/CoverVideo";


const Section = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`;

const Home = () => {
    return (
        <Section>
            <CoverVideo />
            <h1>Logo</h1>
            <h1>NavBar</h1>
        </Section>
    );
};

export default Home;