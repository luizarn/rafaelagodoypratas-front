import styled from 'styled-components';
import logo from "../../assets/images/white_logo.png"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <StyleNavBar>

          <img src={logo} alt="Logotipo" />
      <input type="text" placeholder="Olá, o que você está buscando?" />
  
  <ContainerIcons>
  <ion-icon name="chatbubbles-outline"></ion-icon>
  <Link to="/sign-in">
  <ion-icon name="person-circle-outline"></ion-icon>
  </Link>
  <ion-icon name="bag-handle-outline"></ion-icon>
  </ContainerIcons>
        </StyleNavBar>
    )
}

const StyleNavBar = styled.div`
width: 100%;
height: 100px;
background: #FFFFFF;
border: 1px solid #DBDBDB;
display: flex;
justify-content:space-around;
align-items: center;
input{
    box-sizing: border-box;
    width: 280px;
    height: 20px;
    background: #FAFAFA;
    border: 1px solid #ACE4D3;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #979797;
}
img{
    width: 160px;
    height: 40px;
}
`
const ContainerIcons = styled.div`
    display: flex;
    ion-icon{
        width: 25px;
        height: 24px;
        margin-right: 30px;
        color: #6CBFA6;
    }
`
