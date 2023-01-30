import { NavItem } from "./AuthNav.styled";


const navItems = [
   { href: 'login', text: 'Вхід' },
   { href: 'registration', text: 'Реєстріція' }
];

export const AuthNav = () => {
   return (
      <nav>
         {navItems.map(({ href, text }) => (
            <NavItem key={href} to={href}>{text}</NavItem>
         ))}
      </nav>
   );
};