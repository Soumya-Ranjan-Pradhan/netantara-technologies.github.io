import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from './components/style/Button'
const Studies = () => {
  return (
    <Wrapper className="section section-freelancing">
      <div className="common-heading">
        <h3>Case Studies</h3>
        <p className='common-heading-1'>How we have helped clients survive, grow and conquer market segments.</p>
      </div>
      
      <div className="container grid-three-column">
       <div className="card">
           <div className="card-1">
            <img src="./images/img-1.jpg" alt="" className='My-img' />
           </div>

           <div className="card-2">
            <img src="./images/img-2.jpg" alt="" className='My-img' />
           </div>

           <div className="card-3">
            <img src="./images/img-3.jpg" alt="" className='My-img' />
           </div>

       </div>
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
top: 5rem;
background-image: url('./images/case-studies-banner.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
background-attachment: fixed;
position: relative;
transition: all 0.7s linear;
text-align: center;
.card{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  /* margin-left: 30%; */
  margin-left: 6rem;
  margin-right: 6rem;
 }
.common-heading{
  padding-top: 4rem;
 text-align: center;
 font-size: 2rem;
 color: white;
 }
 .My-img{
  width: 60vh;
  height: auto;
 }

.common-heading-1{
  color: white;
  font-size: 1rem;
}
.main-btn{
  margin-top: 3rem;
}
`
export default Studies