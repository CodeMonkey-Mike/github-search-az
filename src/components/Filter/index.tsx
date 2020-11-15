import React, { useState } from 'react';
import {
  FilterContainer,
  FilterTitle,
  FilterContent,
  Pill
} from './style'; 

import upperFirst from 'lodash/upperFirst'

const types = ['source', 'forks', 'archived', 'mirrors']

interface IFilterProps {
  onClick?: (e:string)=> void; 
}

export const Filter = ({
  onClick = ()=> {},
}: IFilterProps) =>  {
  const [active, setActive] = useState('');
  return(
    <FilterContainer>
    <FilterTitle>Filter by:</FilterTitle>
    <FilterContent>
      {types.map((type:string)=> (
        <Pill active={active === type} onClick={()=>{
          onClick(type);
          if(active && type === active) {
            setActive('');
          } else {
            setActive(type);
          }
        }}>
          {upperFirst(type)}
        </Pill>
      ))}
    </FilterContent>
  </FilterContainer>
)}