import styled from "styled-components";

export const Span = styled.span`
width: 50px;
height: 50px;
background: ${p => p.theme.colors.random};
display: block;
border-radius: ${p => p.theme.radii.round};
`
export const Btn = styled.button`
color: ${p => p.theme.colors.hover};
`