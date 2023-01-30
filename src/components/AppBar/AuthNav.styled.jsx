import styled from "styled-components";
import { NavLink } from "react-router-dom"


export const NavItem = styled(NavLink)`
padding: ${p => p.theme.space[4]}px;
transition: all 0.3s ease 0s;

&.active {
   color: ${p => p.theme.colors.text};
   border-bottom: ${p => p.theme.borders.normal}
}

:hover:not(.active),
:focus-visible:not(.active){
   transition: all 0.3s ease 0s;
   color: ${p => p.theme.colors.hover};
}
`