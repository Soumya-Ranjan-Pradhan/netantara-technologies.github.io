import React from 'react'
import styled from 'styled-components'
import { Button } from './style/Button'
const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="section-hero-data">
          <h1 className='hero-heading'>Technology . Design . Consulating</h1>
        </div>

        <div className="section-hero-data1">
        <h3 className='hero-para'>We  deliver <span> handcrafted  </span> </h3>
          <h3 className='hero-para1'>Software solution to fit your needs</h3>
          <Button className='btn hireme-btn'>VIEW EXPERTISE</Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 3rem 0;
.section-hero-data{
  display: grid;
  justify-content: center;
  text-align: center;
}
.btn {
    max-width: 9rem;
    margin-top: 5.5rem;
    margin-bottom: 4.4rem;
    margin-left: 10rem;
  }
  .section-hero-data1{
  display: grid;
  justify-content: center;
}
.hero-heading{
  font-weight: bold;
  margin-top: 1.5rem;
    margin-bottom: 3.4rem;
}
.hero-para{
  font-size: 1.8rem;
  margin-left: 6rem;
}
span{
  color:${({ theme }) => theme.colors.span1}
}
.hero-para1{
  font-size: 2rem;
  
}
`
export default HeroSection