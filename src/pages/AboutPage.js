import React from 'react'
import styled from 'styled-components'
import { Products12 } from '../utils/constants'
import star from '../images/start.png'
import { GiSettingsKnobs } from 'react-icons/gi'
import meta from '../images/metamask.png'
import trust from '../images/trust.png'
import { IoIosArrowForward } from 'react-icons/io'
import { VscClose } from 'react-icons/vsc'
import { useGlobalContext } from '../context'

const AboutPage = () => {
  const { open, setOpen } = useGlobalContext()

  return (
    <Wrapper>
      <div className='rest'>
        <p className='cry'>Resturant</p>
        <p className='cry'>Cottage</p>
        <p className='cry'>Castle</p>
        <p className='cry'>fantast city</p>
        <p className='cry'>beach</p>
        <p className='cry'>Carbins</p>
        <p className='cry'>Off-grid</p>
        <p className='cry'>Farm</p>
        <div id='location'>
          <p>Location</p>
          <GiSettingsKnobs />
        </div>
      </div>
      {open && (
        <div className='wallet'>
          <div className='overlay'></div>

          <div className='pop-up'>
            <div className='head-pop'>
              <p>connect wallet</p>
              <VscClose
                className='close'
                onClick={() => {
                  setOpen(false)
                }}
              />
            </div>
            <div className='pop-content'>
              <p id='choose'>Choose your preferred wallet:</p>
              <div className='wall'>
                <div className='pop-img'>
                  <img src={meta} alt='' className='arrow' />
                  <p>Metamask</p>
                </div>
                <IoIosArrowForward />
              </div>
              <div className='wall'>
                <div className='pop-img'>
                  <img src={trust} alt='' className='arrow' />
                  <p>WalletConnect</p>
                </div>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='proj'>
        <div className='projects'>
          {Products12.map((item) => {
            const { id, img, index, date, text } = item
            return (
              <div className='proj1'>
                <img src={img} className='img' alt='' />
                <div className='infos'>
                  <div className='info1'>
                    <p>Desert king</p>
                    <p>1MBT per night</p>
                  </div>
                  <div className='info2'>
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                  </div>
                  <img src={star} alt='' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: 0 auto;
  gap: 4rem;
  .about-img {
    max-width: 450px;
    display: block;
    text-align: center;
    border-radius: var(--radius);
  }
  .proj1 {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid black;
    p {
      color: black;
    }
    .img {
      width: 100%;
      margin-bottom: 0.5rem;
      padding: 0 0.5rem;
    }
  }
  .rest {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 5rem;
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.1rem 1rem;
      border: 1px solid black;
    }
    p {
      color: black;
      margin-bottom: 0;
      font-size: 1.2rem;
    }
  }
  .pop-up {
    width: 40%;
    position: fixed;
    left: 35%;
    top: 40%;
    background-color: white;
    border-radius: 10px;
    border: none;
    z-index: 99;
    p {
      margin-bottom: 0;
      color: black;
    }
  }
  .head-pop {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    align-items: center;
    border-bottom: 1px dashed black;
  }
  .close {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .wall {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: 1px dashed black;
    border-radius: 5px;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .overlay {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .pop-img {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .pop-content {
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }
  .arrow {
    font-size: 1.2rem;
  }
  #choose {
    font-size: 1rem;
    // padding-bottom:1rem;
  }
  .infos img {
    padding: 0 0.5rem;
  }
  .infos div {
    display: flex;
    padding: 0 0.5rem;
    justify-content: space-between;
    font-size: 0.7rem;
    p {
      margin-bottom: 0.3rem;
    }
  }

  p {
    line-height: 1.5;
    color: #e8f1f2;
  }
  @media (max-width: 1180px) {
    .infos div {
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 1050px) {
    .infos div {
      font-size: 0.5rem;
    }
    .rest p {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 900px) {
    .projects {
      grid-template-columns: 47% 47%;
    }
    .infos div {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 700px) {
    .projects {
      display: grid;
      grid-template-columns: 100%;
      gap: 2rem;
    }
    .rest {
      margin-right: 0rem;
    }
    .rest p {
      font-size: 0.8rem;
    }
    .pop-up {
      width: 90%;
      left: 5%;
      top: 41%;
    }
  }
  @media (max-width: 550px) {
    .cry {
      display: none;
    }
    .proj {
      padding-top: 0;
    }
  }
  @media (max-width: 350px) {
    .infos div {
      font-size: 0.7rem;
    }
  }
`
export default AboutPage
