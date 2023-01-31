import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './components/style/Button'
const What = () => {
  return (
    <Wrapper className="section section-freelancing">
    <h2 className='Main-heading'>What we do</h2>
    <div className="container-1  grid grid-three-column">
      <figure>
          <img src="./images/idea-to-mvp-icon.png" srcset="" className='logo-1'/>
          <h3 className='Heading'>Idea to MVP</h3>
          <p className='para-section'>We will help you define your software requirements and build a minimum viable product, so that you can quickly acquire early customers and raise funds.</p>
         </figure>

         <figure>
          <img src="./images/MVP-to-Product-icon.png" srcset="" />
          <h3 className='Heading'>MVP to Product</h3>
          <p className='para-section'>We will work to fix your user experience, increase user retention and help you go to the next level so that you can strengthen your revenue channels.</p>
         </figure>

         <figure>
          <img src="./images/product-platform-icon.png" srcset="" />
          <h3 className='Heading'>MVP to Product</h3>
          <p className='para-section'>We will work to fix your user experience, increase user retention and help you go to the next level so that you can strengthen your revenue channels.</p>
         </figure>
    </div>

    <div className="main-btn">
         <NavLink to="/">
            <Button className='btn'>WHY NETTANTRA?</Button>
          </NavLink>
         </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 5rem 0;
background-image: url('./images/consulting-banner-1.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
background-attachment: fixed;
position: relative;
transition: all 0.7s linear;
text-align: center;
h2{
  font-size: 2rem;
}
.container-1{
  margin-left: 10rem;
  margin-right: 10rem;
 margin-top: 2rem;
}
 img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 3rem;
      transition: all 0.2s linear;
    }
    h2{
      color: ${({ theme }) => theme.colors.color1};
    }
    .Heading{
      margin-top: 1rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.color1};
    }
    .para-section{
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.color1};
    }
    .main-btn{
      margin-top: 5rem;
    }
`
export default What
