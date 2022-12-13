import styled from "styled-components"

export const Wrapper = styled.div`
border: 6px solid #fdd600;
display: flex;
padding: 10px 10px;
height: fit-content;
flex-direction: column;
width: fit-content;
height: 440px;
align-items: center;
justify-content: center;
gap: 10px;
background: linear-gradient(120deg, ${props => props.gradientColor1} 0%, ${props => props.gradientColor2} 100%);

h2{
  font-size: ${props => props.text.length >= 10 ? "20px" : "32px"};
  margin: 0;
  color: black;
  text-transform: uppercase;
}

.ImageWrapper{
  border: 5px solid black;
  width: 240px;
  height: 240px;
  position: relative;
}
`

export const TypeWrapper = styled.div`
display: flex;
width: 100%;
gap: 10px;
justify-content: center;
`

export const TypeContainer = styled.div`
align-items: center;
background: ${props => props.background};
border-radius: 4px;
border: 1px solid black;
color: white;
display: flex;
font-size: 12px;
height: 26px;
justify-content: center;
text-align: center;
text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);
text-transform: uppercase;
width: 66px;
`

export const StatWrapper = styled.div`
width: 100%;
flex-wrap: wrap;
display: flex;
font-family: "PokemonDB";
text-transform: uppercase;
max-width: 240px;
`

export const StatContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 5px;
align-items: center;
justify-content: center;
font-size: 16px;
color: black;
text-shadow: 1px 1px 2px rgb(0 0 0 / 70%);

.points{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  &::after{
    content: "";
    width: 100px;
    height: 5px;
    background-color: #000000;
    display: block;
  }
}
`

