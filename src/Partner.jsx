import React from 'react'
import styled from 'styled-components'
import { Button } from './components/style/Button'
const Partner = () => {
  return (
    <Wrapper className="section section-freelancing">
<div className="common-heading">
        <h3>Partner with us</h3>
        <p className='common-heading-1'>We like solving tough and pressing global problems by the use of modern technologies. We partner with organisations as well as individuals from around the globe whose mission is in making a dent in the world we live in by creating solutions that eventually contribute to making lives easier.</p>
        <Button className='btn main-btn'>JOIN US</Button>
      </div>

      <div className="container grid-three-column">
       <div className="card">
           <div className="card-1">
            <img src="./images/img-1.jpg" alt="" className='My-img' />
           </div>

           <div className="card-2">
            <img src="./images/img-2.jpg" alt="" className='My-img' />
           </div>
       </div>
       </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 5rem 0;
.common-heading{
  padding-top: 5rem;
 text-align: center;
 font-size: 2rem;
 color: white;
 }
 h3{
  color: black;
 }
 p{
  font-size: 1rem;
  margin-left: 20rem;
  margin-right: 18rem;
 }
 .main-btn{
  margin-top: 3rem;
 }
 .card{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 30%;
  margin-right: 30%;
  /* margin-left: 6rem;
  margin-right: 6rem; */
  grid-gap: 2rem;
 }
 .My-img{
  width: 60vh;
  height: auto;
 }
`
export default Partner