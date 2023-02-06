
import { ActiveLink } from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className='menu-container'>
      {
        menuItems.map( ({ text, href }) => (
          <ActiveLink key={ text } name={ text } path={ href } />
        ))
      }
    </nav>
  )
}