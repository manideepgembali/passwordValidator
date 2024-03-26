// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const MiniContainer = styled.div`
  width: 50%;
  height: 60%;
  background-color: #475569;
  border-radius: 10px;
  border: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Head = styled.h1`
  color: white;
  font-size: 40px;
  font-family: 'Roboto';
`

export const Para = styled.p`
  color: white;
`

export const Input = styled.input`
  width: 300px;
  height: 40px;
  background-color: white;
`
export const Para2 = styled(Para)`
  color: red;
`
