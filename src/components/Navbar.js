import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { links } from '../utils/constants'
import { CartButtons } from '../components/index'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { menu, setMenu } = useGlobalContext()
  const [scrolled, setScrolled] = React.useState(false)
  const { open, setOpen } = useGlobalContext()
  const nav = React.useRef()

  return (
    <NavContainer ref={nav}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='' className='logo' />
          <button
            className='nav-toggle'
            onClick={() => {
              setMenu(true)
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <NavLink
                  key={id}
                  to={url}
                  className={({ isActive }) =>
                    isActive ? 'link active' : 'link'
                  }
                  end
                >
                  {text}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <button
          className='cv-btn'
          onClick={() => {
            setOpen(true)
          }}
        >
          Connect wallet
        </button>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  // padding: 3rem 0
  height: 5rem;
  width: 100%;
  transition: all 1s;

  // margin-top: 3rem;
  // background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  // z-index: 1;
  // .sticky {
  // position: fixed;
  // background-color: rgba(255, 255, 255, 0.95);
  // }
  .nav-center {
    // background-color: black;

    width: 90vw;
    // position: fixed;
    // margin: 5rem auto;
    // max-width: var(--max-width);
  }
  // .logo {
  //   width: 100px;
  // }
  .nav-header {
    display: flex;
    align-items: center;
    // position: fixed;
    justify-content: space-between;
    // img {
    //   width: 25px;
    //   margin-left: -15px;
    //   color: black;
    // }
    h2 {
      margin-bottom: 0rem;
    }
    button {
      padding: 0.5rem 0.5rem 0.3rem 0.5rem;
      border-radius: 0.5rem;
      text-align: center;
      border: 1px solid #3b4748;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: black;
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      // padding: 0.5rem 0rem;
      // gap: 1rem;

      // border: 1px solid #3b4748;
      // border-radius: 50px;
      li {
        // margin: 0 1rem;
        // gap: 0.5rem;
      }
      a {
        color: black;
        // color: var(--clr-grey-3);
        font-size: 0.8rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.7rem 1rem;
        // &:hover {
        //   border-bottom: 2px solid var(--clr-primary-7);
        // }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
    .cv-btn {
      padding: 0.7rem 1.5rem;
      border: none;
      background-color: #a02279;
      font-size: 0.8rem;
      display: unset;
      color: white;
      border-radius: 10px;
    }
  }
  @media (min-width: 900px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      // padding: 0.5rem 0rem;
      // gap: 1rem;

      // border: 1px solid #3b4748;
      // border-radius: 50px;
      li {
        // margin: 0 1rem;
        // gap: 0.5rem;
      }
      a {
        // color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.7rem 1rem;
        // &:hover {
        //   border-bottom: 2px solid var(--clr-primary-7);
        // }
      }
    }
    .cv-btn {
      padding: 0.7rem 1.5rem;
      border: none;
      font-size: 1rem;
      display: unset;
      // border-radius: 30px;
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar
