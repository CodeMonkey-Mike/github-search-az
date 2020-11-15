import React from 'react';
import { Layout,  MainContainer } from './style';
import Header from '../Header';  

interface LayoutProps {
  children: React.ReactNode;
}
const Main = ({ children }: LayoutProps) => {
  return (
    <Layout>
        <Header />
        <MainContainer> 
          {children}
        </MainContainer>
      </Layout>
  );
};

export {Main as Layout};
