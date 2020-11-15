import styled from 'styled-components';
import theme from 'styled-theming';

interface Props {
  variant?: 'fluid';
}

const containerWidth: theme.ThemeSet = theme.variants('mode', 'variant', {
  fluid: { ccad: '100%' },
});

export const Container = styled.div<Props>`
  width: ${containerWidth};
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: white;
`;
