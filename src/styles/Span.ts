import styled from 'styled-components';
import theme from 'styled-theming';

import { grey500 } from './colors';
import { getCol } from './utils/getCol';

interface Props {
  variant?: 'large' | 'normal' | 'small';
  muted?: boolean;
}

const spanFontWeight: theme.ThemeSet = theme.variants('mode', 'variant', {
  large: { ccad: 'normal' },
  normal: { ccad: 'normal' },
  small: { ccad: 'normal' },
});

const spanLineHeight: theme.ThemeSet = theme.variants('mode', 'variant', {
  large: { ccad: '1.875' },
  normal: { ccad: '1.5' },
  small: { ccad: '1.125' },
});

const spanFontSize: theme.ThemeSet = theme.variants('mode', 'variant', {
  large: { ccad: '1.25rem' },
  normal: { ccad: '1rem' },
  small: { ccad: '.875rem' },
});

const mutedColor: theme.ThemeSet = theme.variants('mode', 'muted', {
  true: { ccad: getCol(grey500, 0.4) },
});

export const Span = styled.span<Props>`
  font-weight: ${spanFontWeight};
  line-height: ${spanLineHeight};
  font-size: ${spanFontSize};
  color: ${mutedColor};
`;

Span.defaultProps = { variant: 'normal' };
