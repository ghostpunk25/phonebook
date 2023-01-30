import styled from 'styled-components';

export const Btn = styled.button`
background: ${p => p.theme.colors.text};
padding: ${p => p.theme.space[2]}px;
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSize.m};
transition: all 0.3s ease 0s;
color: ${p => p.theme.colors.black};
align-self: flex-end;
:hover{
   background: ${p => p.theme.colors.btn};
}
`