import React from 'react';
import { Header, Heading } from './style'; 
import Search from './Search'; 

const Main: React.FC = () => {
  return (
    <>
    <Header>
      <Heading>
        Github <sup>Search</sup>
      </Heading>
    </Header>
    <Search />
    </> 
  );
};

export default Main;
