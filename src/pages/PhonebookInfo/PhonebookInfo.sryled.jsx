import styled from "styled-components";

export const Input = styled.input`
font-size: ${p => p.theme.fontSize.m};
padding: ${p => p.theme.space[4]}px;
margin-bottom: ${p => p.theme.space[6]}px;
`
export const H1 = styled.h1`
font-size: ${p => p.theme.fontSize.xl};
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[5]}px;
text-align: center;
`
export const Label = styled.label`
display: inline-flex;
justify-content: flex-end;
position: relative;
cursor: pointer;
:before{
   content: '';
   flex: 0 0 50px;
   height: 50px; 
   background: ${p => p.theme.colors.text};
   border-radius: ${p => p.theme.radii.round};
}
:after{
      content: '';
      position: absolute;
      top 50%;
      left: -25px;
      height: 20px;
      width: 2px;
      background: black;
      transform: translate(-50%,-50%) rotate(0deg);
      transition: all 0.3s ease 0s;
}
`
export const Span = styled.span`
position: absolute;
top: 50%;
left: 50%;
:after{
   content: '';
   position: absolute;
   left: -35px;
   width: 20px;
   height: 2px;
   background: black;
}
`

export const Btn = styled.input`
position: absolute;
top: 0;
left: 0;
opacity: 0;
:checked + Label:after{
   transform: translate(-50%,-50%) rotate(90deg);
}
`