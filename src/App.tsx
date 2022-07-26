import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import  List  from './features/list/List';
import { Box, Container } from '@chakra-ui/react';

function App() {
  return (
    <Box>
    <List />
    </Box>
  );
}

export default App;
