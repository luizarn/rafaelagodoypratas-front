import styled from "styled-components"
import useNameUser from '../../hooks/useNameUser';
import { Link } from "react-router-dom";

export default function Admin() {

const userName = useNameUser();
console.log(userName)

 return (
  <>
  <GoToPageAdminLink to="/">
  Ir para a página inicial do site
 </GoToPageAdminLink>
    <Container>
      <p>OLá, {userName}</p>
    </Container>
    </>
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

const GoToPageAdminLink = styled(Link)`
background-color: #6CBFA6;
height:30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: #262626;
text-decoration: none;
padding-left: 10px;
`
