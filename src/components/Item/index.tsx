import React from 'react'; 
import { createJsxAttribute } from 'typescript';
import { Grid, GridCell } from '../../styles/Grid';
import { Fork } from '../Icons';
import { Divider } from '../Utils';
import { ItemContainer, Link, Description, AttributeWrapper, Attribute } from './style'; 

interface LayoutProps {
  data: Array<any>;
}
const Item = ({ data }: LayoutProps) => {
  return (
    <>
       {data.map((item:any) => (
        <ItemContainer key={item.id}>
                <Grid
                {
                  ...{
                    gridColumnGap: '0'
                  }
                }
                >
                  <GridCell span={'10'}>
                    <Link href={item.html_url} target='_blank'>
                    {item.full_name}
                    </Link>
                    <Description>{item.description}</Description>
                  </GridCell>
                  <GridCell span={'6'}>
                      <Link href={item.html_url} target='_blank'>Explore</Link>
                  </GridCell>
                  <GridCell span={'16'}>
                    <AttributeWrapper>
                      <Attribute language={item.language}><span></span>{item.language}</Attribute>
                      <Attribute><Fork />{item.forks_count}</Attribute>
                      <Attribute>{item.stargazers_count}</Attribute>
                    </AttributeWrapper>
                  </GridCell>
                </Grid>
                <Divider fluid marginTop={20}/>
        </ItemContainer>
              ))} 
    </>
  );
};

export {Item};
