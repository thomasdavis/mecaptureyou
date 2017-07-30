import { styled } from 'styletron-react'

const colorPrimary = '#dd4814';

export const Header = styled('div', (props) => ({
  background: colorPrimary,
  height: '60px',
  'font-family': 'Ubuntu, sans-serif',
}));

export const Button = styled('button', (props) => ({
  background: 'red',
  ':before': {
    alignSelf: 'center',
    borderColor: '#ffffff transparent transparent transparent',
    borderStyle: 'solid',
    borderWidth: '12px 4px 0 4px',
    content: '""',
    height: 0,
    marginRight: '5px',
    width: 0
  }
}))
