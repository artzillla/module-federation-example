import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

const lightTheme = {
  colors: {
    text: '#000',
    background: '#f5f5f7',
    card: '#fff',
  },
};

const darkTheme = {
  colors: {
    text: '#fff',
    background: '#000',
    card: '#000',
  },
};

const Container = styled.div`
  border: 1px solid #fff;
  background: ${(props) => props.theme.colors.card};
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px;
  transition: all 0.5s;
  min-height: 100vh;
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: 0;
  font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
    Helvetica, Arial, sans-serif;
  padding: 5px 0 5px 10px;
`;

export default function Cart({ theme, ...props }) {
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Container {...props}>
        <Heading>Your shopping cart</Heading>
      </Container>
    </ThemeProvider>
  );
}
