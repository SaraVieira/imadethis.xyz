import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import party from '../img/party.svg'

const Header = styled.div`
  background: ${props => props.theme.black};
  padding: 60px;
  text-align: center;
`

const H2 = styled.h2`
  color: ${props => props.theme.white};
`

const UL = styled.ul`
  position: absolute;
  display: flex;
  list-style: none;
  right: 50px;
  top: 50px;

  li:not(:last-child) {
    margin-right: 20px;
  }

  a {
    color: ${props => props.theme.white};
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  img {
    margin-right: 20px;
  }
`

const Navbar = () => {
  return (
    <Header>
      <nav role="navigation" aria-label="main-navigation">
        <UL>
          <li>
            <Link to="/contact">Submit</Link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/SaraVieira/imadethis.xyz"
            >
              Github
            </a>
          </li>
        </UL>
        <Flex>
          <img src={party} alt="logo" />
        </Flex>
      </nav>
      <section>
        <H2>
          "Useless is not worthless" -{' '}
          <a href="https://twitter.com/devdevcharlie?lang=en">@devdevcharlie</a>
        </H2>
      </section>
    </Header>
  )
}

export default Navbar
