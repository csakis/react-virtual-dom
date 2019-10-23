import { hot } from 'react-hot-loader';
import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Btn from './Button';
import IpText from './IpText';
import SimpleText from './SimpleText';

function App() {
  return (
    <Container>
      <CssBaseline />
      <Btn />
      <SimpleText />  
      {/* <IpText /> */}
    </Container>
  );
}

export default hot(module)(App);
