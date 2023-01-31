import React from 'react'
import styled from 'styled-components'

const Expertise = () => {
  return (
    <Wrapper className="section">
      <h2 className='common-heading'>Our Expertise</h2>
      <div className="container grid-two-column">
       <div className="card">
           <div className="card-1">
            <img src="./images/consulting-icon.png" alt="" className='My-img' />
            <h3 className='my-heading'>CONSULTING</h3>
           </div>

           <div className="card-2">
            <img src="./images/engineering-icon.png" alt="" className='My-img' />
            <h3 className='my-heading'>ENGINEERING</h3>
           </div>

           <div className="card-3">
            <img src="./images/services-icon.png" alt="" className='My-img' />
            <h3 className='my-heading'>SERVICES</h3>
           </div>

           <div className="card-4">
            <img src="./images/research-icon.png" alt="" className='My-img' />
            <h3 className='my-heading'>RESEARCH</h3>
           </div>
       </div>
      </div>
    </Wrapper>
  )
}
 const Wrapper = styled.section`
background-color: #f7f7f7;
 .card{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-left: 30%;
  width: 100vh;
  height: 100vh;
  grid-gap: 1rem;
 }
 .My-img{
  width: 100px;
  height: auto;
  margin-top: 2rem;
 }
 .card-1{
  background: blue;
        display: grid;
          justify-items: center;
          text-align: center;
  /* margin-bottom: 4rem; */
 }
 .card-2{
  background: gray;
        display: grid;
          justify-items: center;
          text-align: center;
 }
 .card-3{
  background: yellow;
        display: grid;
          justify-items: center;
          text-align: center;
 }
 .card-4{
  background: chocolate;
        display: grid;
          justify-items: center;
          text-align: center;
 }
 .common-heading{
  padding-top: 4rem;
 text-align: center;
 font-size: 2.5rem;
}
h3{
  color: white;
}
 `
export default Expertise