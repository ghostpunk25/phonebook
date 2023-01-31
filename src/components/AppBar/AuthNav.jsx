import { NavItem } from "./AuthNav.styled";


const navItems = [
   { href: '/', text: 'Вхід' },
   { href: 'registration', text: 'Реєстрація' }
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