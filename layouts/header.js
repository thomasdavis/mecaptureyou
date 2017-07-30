import Page from '../layouts/main';
import Link from 'next/link'
import { styled } from 'styletron-react'
const colorPrimary = '#dd4814';

const Header = styled('div', (props) => ({
  background: colorPrimary,
  height: '60px',
  'font-family': 'Ubuntu, sans-serif',
}));

const Logo = styled('h1', (props) => ({
  margin: 0,
  padding: 0,
  display: 'inline-block',
  marginRight: '20px',
  marginLeft: '20px',
  float: 'left',
  height: '60px',
  lineHeight: '60px',
  color: '#fff'
}));

const MainMenu = styled('div', (props) => ({
  float: 'left'
}));

const AccountMenu = styled('div', (props) => ({
  float: 'right'
}));

const MenuLink = styled('span', (props) => ({
  textDecoration: 'none',
  color: '#fff',
  height: '60px',
  lineHeight: '60px',
  marginRight: '20px',
  cursor: 'pointer',
}));

export default () => (
  <Header>
    <Logo><Link href="/">me capture you</Link></Logo>
    <MainMenu>
      <Link  prefetch href="/libraries"><a><MenuLink>gallery</MenuLink></a></Link>
    </MainMenu>
    <AccountMenu>
      <Link prefetch href="/login"><a><MenuLink>login</MenuLink></a></Link>
    </AccountMenu>
  </Header>
)
