import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledContainer = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: black;
`

const StyledLink = styled.div`
  padding: 0 1rem 0 0;
`

const StyledLinkLast = styled.div``

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: black;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" aria-label="home">
        <StyledLogo>sangwon.</StyledLogo>
      </Link>
      <StyledContainer>
        <Link to="blog" aria-label="blog">
          <StyledLink>blog</StyledLink>
        </Link>
        <Link to="resume" aria-label="resume">
          <StyledLinkLast>resume</StyledLinkLast>
        </Link>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
