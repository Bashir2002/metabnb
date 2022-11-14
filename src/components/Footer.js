import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Wrapper>
      <div className='one'>
        <img src={logo} alt='' />
        <div className='social'>
          <FaFacebookF className='icon' />
          <FaTwitter className='icon' />
          <FaInstagram className='icon' />
        </div>
        <p>
          <span>&copy;</span>2022 Metabnb
        </p>
      </div>
      <div className='two'>
        <h5>Community</h5>

        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </div>
      <div className='two'>
        <h5>Places</h5>

        <p>Castle</p>
        <p>Farms </p>
        <p>Beach</p>
        <p>Learn more</p>
      </div>
      <div className='two'>
        <h5>About us</h5>

        <p>Road map</p>
        <p>Creators </p>
        <p>Career</p>
        <p>Contact us</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 15rem 2rem 5rem;
  background-color: black;
  span {
    color: var(--clr-primary-5);
  }
  #par {
    color: #3772ff;
  }
  .one {
    max-width: 400px;
    p {
      color: white;
    }
    div {
      margin: 2rem 0;
    }
    .social {
      display: flex;
      gap: 1rem;
    }
  }
  .icon {
    color: white;
  }
  .let {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #if {
    color: white;
    font-size: 1rem;
  }
  h5 {
    color: var(--clr-white);
    margin-bottom: 1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  p {
    color: white;
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
  }
  @media (max-width: 950px) {
    padding: 2rem;
  }
  @media (max-width: 776px) {
    padding: 2rem;
    flex-direction: column;
    gap: 2rem;
    .hero-img {
      width: 100%;
    }
    .let {
      flex-direction: column;
      // align-items: unset;
      text-align: left;
      display: block;
      justify-content: unset;
    }
    button {
      display: block;
    }
    #if {
      color: white;
      font-size: 0.9rem;
      width: 80%;
    }
    .one img {
      width: 50%;
      color: black;
    }
  }
`

export default Footer
