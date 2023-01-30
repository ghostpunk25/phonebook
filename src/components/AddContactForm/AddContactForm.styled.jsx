import styled from 'styled-components';


export const Label = styled.label`
font-size: ${p => p.theme.fontSize.m};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[2]}px;
`

export const Input = styled.input`
font-size: ${p => p.theme.fontSize.m};
padding: ${p => p.theme.space[4]}px;
margin-bottom: ${p => p.theme.space[5]}px;
`

export const Btn = styled.button`
background: ${p => p.theme.colors.react};
padding: ${p => p.theme.space[5]}px;
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSize.m};
transition: all 0.3s ease 0s;
:hover{
   background: ${p => p.theme.colors.btn};
}
`