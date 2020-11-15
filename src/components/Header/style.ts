import * as colors from '../../styles/colors';
import styled from 'styled-components';

export const Header = styled.div`
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey200};
  padding: 30px;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

export const Heading = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 0;
  sup {
    font-size: 14px;
    color: ${colors.grey500};
  }
`;


