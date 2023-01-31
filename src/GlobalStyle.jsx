import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
*{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 3rem;
  font-weight: 900;
}
  p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
   ${'' /* 1fr 1.2fr .5fr .8fr */}
}
.common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }
`;