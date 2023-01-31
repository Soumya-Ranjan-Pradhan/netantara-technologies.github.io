import React from 'react'
import styled from 'styled-components'

const Clientele = () => {
  return (
    <Wrapper className="section">
      <h2 className='common-heading'>Clientele</h2>
      <div className="container grid grid-four-column">
      <div className="card">
        <figure>
          <img src="./images/cl_1.png" alt="" className='img-all' />
        </figure>

        <figure>
          <img src="./images/cl_2.png" alt="" className='img-all' />
        </figure>

        <figure>
          <img src="./images/cl_3.png" alt="" className='img-all' />
        </figure>

        <figure>
          <img src="./images/cl_4.png" alt=""  className='img-all' />
        </figure>

        <figure>
          <img src="./images/cl_5.png" alt="" className='img-all' />
        </figure>

        <figure>
          <img src="./images/cl_6.png" alt="" className='img-all' />
        </figure>

        <figure>
          <img src="./images/cl_7.png" alt="" className='img-all' />
        </figure>

        <figure>
          <img src="./images/cl_8.png" alt="" className='img-all' />
        </figure>

      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 5rem 0;
height: 95vh;
.card{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-left: 10% ;
  grid-gap: 5rem;
}
.img-all{
 width: 230px;
 height: auto;
 box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
 height: 5rem;
}
.common-heading{
 text-align: center;
 font-size: 2.5rem;
}
`
export default Clientele