import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30vh;

  h2{
    font-size: 72px;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  gap: 15px;
`

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 35px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  transition: .3s ease-in-out;

  :nth-child(1){
    background-color: lime;
    
    :hover{
      background-color: green;
    }
  }
  
  :nth-child(2){
    background-color: blueviolet;
    
    :hover{
      background-color: rgb(121, 122, 255);
    }
  }
  
    :nth-child(3){
      background-color: #900;
  
      :hover{
        background-color: #600;
      }
    }
`
