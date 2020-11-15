import styled from 'styled-components';  
import languageColors from '../../styles/languageColors';
import _get from 'lodash/get';

export const ItemContainer = styled.div`

`;
 
export const Link = styled.a`
  font-size: 20px;
  margin-bottom 10px;
  display: block;
  &::hover {
    text-decoration: underline;
  }
`;  
export const Description = styled.div`
  margin-bottom: 20px;
`;  
interface IAttributeProps {
  language?:string;
}

export const AttributeWrapper = styled.div<IAttributeProps>`
  display:flex; 
  flex-direction: row;
`;  

export const Attribute = styled.div<IAttributeProps>`
  display:flex;
  width: 100px; 
  margin-right: 20px;
  span {
    height: 10px;
    width: 10px;
    border-radius: 10px;
    ${({language}) => language && `background-color: ${_get(languageColors, language)};`
  }
`;  