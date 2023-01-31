import React from 'react'
import styled from 'styled-components'

const Viewpoints = () => {
  return (
    <Wrapper className="section section-freelancing">
      <div className="common-heading">
        <h3>Expert’s Viewpoints</h3>
      </div>

      <div className="container grid-three-column">
       <div className="card">
           <div className="card-1">
            <img src="./images/marketplace.jpg" alt="" className='My-img' />
           </div>

           <div className="card-1">
            <img src="./images/product-management.jpg" alt="" className='My-img' />
           </div>

           <div className="card-1">
            <img src="./images/healthcare-1.jpg" alt="" className='My-img' />
           </div>

       </div>
       </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-image: url('./images/Idea-thinking.jpg');
background-repeat: no-repeat;
background-size: cover;
height: 80vh;
background-attachment: fixed;
position: relative;
transition: all 0.7s linear;
text-align: center;

.card{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  /* margin-left: 30%; */
  margin-left: 30%;
  margin-right: 30%;
  grid-gap: 2rem;
 }
.common-heading{
  padding-top: 4rem;
 text-align: center;
 font-size: 2rem;
 color: white;
 }
 .My-img{
  width: 50vh;
  height: auto;
 }
 .card-1{
  
 }
`
export default Viewpoints