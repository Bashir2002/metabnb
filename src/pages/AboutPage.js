import React from 'react'
import styled from 'styled-components'
import { Products12 } from '../utils/constants'
import star from '../images/start.png'
import { GiSettingsKnobs } from 'react-icons/gi'

const AboutPage = () => {
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
