import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'

const Section = styled.section`
width: 100vw;
background-color: #4ce69d;
`

const Navbar = styled.nav`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

.mobile {
  display: none;
}

@media (max-width: 64em) {
  .desktop {
    display: none;
  }

  .mobile {
    display: inline-block;
  }
}
`

const Menu = styled.ul`
display: flex;
justify-content: space-between:
align-items: center;
list-style: none;
display: flex;

@media (max-width: 64em) {
  position: fixed;
  top: ${props => props.theme.navHeight};
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  z-index: 2;
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
  backdrop-filter: blur(2px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${props => props.click ? 'translateY(0)' : 'translateY(1000%)'};
  transition: all .3s ease;
}
`

const MenuItem = styled.li`
margin: 0 1rem;
color: #000;
font-weight: bold;
cursor: pointer;

&::after {
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width .3s ease;
}

&:hover::after {
  width: 100%;
}

@media (max-width: 64em) {
  margin: 1rem 0;

  &::after {
    display: none;
  }
}
`

const HamburgerMenu = styled.span`
width: ${props => props.click ? '2rem' : '1.5rem'};
height: 2px;
background: ${props => props.theme.text};
position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
display: none;
justify-content: center;
align-items: center;
cursor: pointer;

&::after, &::before {
  content: ' ';
  width: ${props => props.click ? '1rem' : '1.5rem'};
  height: 2px;
  right: ${props => props.click ? '-2px' : '0'};
  background: ${props => props.theme.text};
  position: absolute;
}

&::after {
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'};
}

&::before {
  bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'};
}

@media (max-width: 64em) {
  display: flex;
}
`



const Navigation = () => {

  const [click, setClick] = useState(false)

  const scrollTo = (id) => {
    let element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })

    setClick(!click)
  }

  return (
    <Section id="navigation">
      <Navbar>
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click} >
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('clients')}>Clients</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}>Services</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')}>Technologies</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
        </Menu>
      </Navbar>
    </Section>
  )
}

export default Navigation