import styled from 'styled-components';
import logo from "../../assets/images/white_logo.png"
import { Link } from "react-router-dom"
import useNameUser from '../../hooks/useNameUser';
import { useCart } from '../../contexts/Cartcontext';

export default function NavBar() {
    const userName = useNameUser();
    const { cartCount } = useCart();

    return (
          <StyleNavBar>
            <img src={logo} alt="Logotipo" />
            <input type="text" placeholder="Olá, o que você está buscando?" />
            <ContainerNameandIcons>
              <ContainerIcons>
                <ion-icon name="chatbubbles-outline"></ion-icon>
                <Link to="/sign-in">
                  <ion-icon name="person-circle-outline"></ion-icon>
                </Link>
                <CartIconWrapper>
                  <ion-icon name="bag-handle-outline"></ion-icon>
                  {cartCount > 0 ? <CartItemCount>{cartCount}</CartItemCount> : null}
                </CartIconWrapper>
              </ContainerIcons>
              {userName ? <p>Olá, {userName}! </p> : ""}
            </ContainerNameandIcons>
          </StyleNavBar>
      );
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
        width: 35px;
        height: 34px;
        margin-right: 30px;
        color: #6CBFA6;
    }
`
const ContainerNameandIcons = styled.div`

display:flex;
flex-direction:column;
align-items: center;
    text-align: center;
    p{
        margin-top: 10px;
        font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6CBFA6;
    }
`

const CartIconWrapper = styled.div`
  position: relative;
`;


const CartItemCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 12px;
  font-weight: bold;
`