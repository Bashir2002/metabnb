import React from 'react'
import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { sidebar } from '../utils/constants'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { menu, setMenu } = useGlobalContext()
  const { open, setOpen } = useGlobalContext()

  return (
    <SidebarContainer>
      <aside className={`${menu ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <h2></h2>
          <button
            className='close-btn'
            onClick={() => {
              setMenu(false)
            }}
          >
            <GrClose />
          </button>
        </div>
        <ul className='links'>
          {sidebar.map((link) => {
            const { id, text, url } = link
            return (
              <li
                key={id}
                onClick={() => {
                  setMenu(false)
                }}
              >
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <button
          className='cv2-btn'
          onClick={() => {
            setOpen(true)
            setMenu(false)
          }}
        >
          Connect wallet
        </button>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.9rem;
    background: transparent;
    border-color: transparent;
    // color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    // color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    text-align: center;
  }
  .links a {
    display: block;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: black;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 800px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
