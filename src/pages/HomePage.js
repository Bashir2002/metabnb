import React from 'react'
import logo1 from '../images/image3.png'
import logo2 from '../images/image4.png'
import logo3 from '../images/image5.png'
import logo4 from '../images/image6.png'
import logo5 from '../images/one.png'
import logo6 from '../images/two.png'
import logo7 from '../images/three.png'
import meta from '../images/metamask.png'
import trust from '../images/trust.png'
import img9 from '../images/img9.png'
import star from '../images/start.png'
import { VscClose } from 'react-icons/vsc'
import { IoIosArrowForward } from 'react-icons/io'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { Products1 } from '../utils/constants'

const HomePage = () => {
  const { open, setOpen } = useGlobalContext()
  return (
    <Wrapper>
      <div className='hero'>
        <div className='hero-content'>
          <h3>
            Rent a <span className='red'>Place</span> away from{' '}
            <span className='red'>Home</span> in the{' '}
            <span className='red'>Metaverse</span>
          </h3>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
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

          <div className='form'>
            <input type='text' />
            <button>Search</button>
          </div>
        </div>
        <div className='hero-img'>
          <div className='part1'>
            <img src={logo1} alt='' />
            <img src={logo2} alt='' />
          </div>
          <div className='part2'>
            <img src={logo3} alt='' />
            <img src={logo4} alt='' />
          </div>
        </div>
      </div>
      <div className='links'>
        <div className='meta'>
          <img src={logo5} alt='' />
          <h3>MBToken</h3>
        </div>
        <div className='meta'>
          <img src={logo6} alt='' />
          <h3>METAMASk</h3>
        </div>
        <div className='meta'>
          <img src={logo7} alt='' />
          <h3>OpenSea</h3>
        </div>
      </div>
      <div className='proj'>
        <h2>Inspiration for your next adventure</h2>
        <div className='projects'>
          {Products1.map((item) => {
            const { img } = item
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
      <div className='bnb'>
        <div className='bnb1'>
          <h3>Metabnb NFTs</h3>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>
        <div className='bnb2'>
          <img src={img9} alt='' />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
 
  margin: 0 auto;
  gap: 4rem;
  .hero img {
    
  }
  .red{
    color:
    #A02279;

  }
  .proj1{
    padding:0.5rem;
    border-radius:5px;
    border:1px solid black;

    .img{
      width:100%;
    }
  }
  .infos img {
    padding: 0 0.5rem;
  }
  .pop-up{
    width:40%;
    position:fixed;
    left:35%;
    top:40%;
    background-color:white;
    border-radius:10px;
    border:none;
    z-index:99;
    p{
      margin-bottom:0;
      color:black;

    }
  }
  .head-pop{
    display:flex;
    justify-content:space-between;
    padding:0.5rem 2rem;
    align-items: center;
    border-bottom: 1px dashed black;
  }
  .close{
    font-size:1.5rem;
    cursor:pointer;
  }
  .wall{
    display:flex;
    align-items:center;
    padding:0.5rem;
    border: 1px dashed black;
    border-radius:5px;
    justify-content:space-between;
    margin-top:1rem;

  }
  .overlay{
    position: fixed;
    display: block; 
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); 
    z-index: 1; 
  }
  .pop-img{
    display:flex;
    align-items:center;
    gap:5px;
  }
  .pop-content{
    padding:1rem 2rem;
    font-size:1.5rem;
  }
  .arrow{
    font-size:1.2rem;
  }
  #choose{
    font-size:1rem;
    // padding-bottom:1rem;
  }
  .bnb{
    background-color:#A02279;
    display: grid;
    align-items: center;
    gap:10%;
    grid-template-columns: 40% 50%;
    color: white;
    padding: 3rem  8rem;
    justify-content: center;

    button{
      padding:0.5rem 1rem;
      color:#A02279;
      border:none;
    }
  }
  .bnb img{
    object-fit:contain;
    width:30rem;
    text-align: center;
  }
  .bnb1 p{
    color:white;
    line-height:2;
  }
  .infos div{
    display: flex;
    padding: 0 0.5rem;

    justify-content: space-between;
    font-size:0.7rem;
    p{
      margin-bottom:0.3rem;
    }
  }
  .form{
    width:100%;
    display: flex;
    justify-content:space-between;
  }
  .form input{
    width:100%;
    outline:none;
    border-bottom-left-radius:5px;
    border-top-left-radius:5px;
    padding: 0.5rem;
  }
  .form button{
    padding: 0.8rem 5rem;
    background-color:#A02279;
    border:none;
    border-bottom-right-radius:5px;
    border-top-right-radius:5px;
    color: #FFFFFF;
  }
  .part1,.part2{
    width:100%;
    display: flex;
    gap:0.5rem;
    flex-direction:column;
  }
  .part1{
    margin-top:5rem;
  }
  .hero-img{
    display:flex;
    gap:0.5rem;
  }
  .hero-img img{
    width:100%;
  }
  .links{
    margin-top:8rem;
    display:flex;
    align-items:center;
    padding:0 5rem;
    justify-content:space-between;
    background-color:#A02279;
  }
  .proj{
    width:90vw;
    margin: 0 auto;
  }
  .meta{
    display:flex;
    align-items:center;
  }
  .meta h3{
    color:white;
    font-size:1.5rem;
    margin-bottom:0;
  }
  .project p {
    line-height: unset;
    margin-bottom: 0.5rem;
  }
  .project h4 {
    font-size: 1.2rem;
  }
  .socials a {
    height: 1.5rem;
  }
  .cv3-btn {
    border-radius: 30px;
  }
  .hero{
    padding-top: 10rem ;
    width: 90vw;
    margin:0 auto;
    display:grid;
    grid-template-columns:45% 45%;
    justify-content: space-between;
  }
  .hero-content p span {
    color: #3772ff;
  }
  h3 {
    margin-down: 2rem;
  }
  .hero-content p {
    // font-family: 'Alpino-Medium';
    font-size: 1.3rem;
  }
  .back {
    font-weight: bolder;
  }
  .hero {
    // display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hero-content {
    // max-width: 50%;
  }
  .hero-content h3 {
    font-size: 3rem;
    line-height: 1.5;
  }
  @media screen and (max-width: 1180px) {
    .hero-content h3 {
      font-size: 2rem;
    }
    .infos div{
      font-size:0.6rem;
    }
    .project h4 {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 1050px) {
    .infos div{
      font-size:0.5rem;
    }
  }
  }
  @media screen and (max-width: 900px) {
    .projects{
      grid-template-columns:47% 47%;
    }
    .infos div{
      font-size:0.9rem;
    }
    .bnb{
      padding:3rem;
    }
    .bnb2 img{
      width:100%;
    }
  }
  @media (max-width: 870px) {
    .project h4 {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 800px) {
    .project h4 {
      font-size: 0.8rem;
    }

  }
  @media (max-width: 700px) {
    .hero {
      display: flex;
      padding-top:2rem;
      
      flex-direction: column-reverse;
    }
    .hero-content {
      max-width: 95%;
      margin-top:1rem;
    }
    .form button{
      padding: 0.8rem 2rem;
    }
    .pop-up{
      width:90%;
      left:5%;
      top:41%;
  
    }
    .hero-content p {
      font-size: 0.8rem;
    }
    .proj h2{
      font-size:1rem;
    }
    .hero-content h3 {
      font-size: 1.5rem;
    }
    .links{
      padding:1rem 0.5rem;
    }
    .meta img{
      width:1.2rem;
    }
    .bnb{
      grid-template-columns: 100%;
      gap:0;
      padding: 1rem;
    }
    .bnb2 img{
      width:100%;
    }
    .meta h3{
      font-size:1rem;
    }
    .hero-img {
      width: 100%;
    }
    .hero-img img{
      width: 100%;
    }
    .projects {
      display: grid;
      grid-template-columns: 100%;
      gap: 2rem;
    }
    .project h4 {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 300px) {
    .info{
      display :grid;
      margin-top: -0.3rem;
      grid-template-columns:100%;
    }
  }
`

export default HomePage
