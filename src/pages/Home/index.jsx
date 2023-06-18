import styled from "styled-components"

export default function Home() {

 return (
    <Container>
      <p>Em breve a página principal estará disponível...</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  margin: 30px auto;
  p{
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #000000;
  }
  img {
    margin-top: 65px;
    width: 150px; 
    height: 150px; 
    border-radius: 50%; 
    background-color: #6ad0af;
  }
  @media screen and (min-width: 800px) {
    img {
      margin-top: 100px;
    }
  }
`