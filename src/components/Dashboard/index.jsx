import styled from 'styled-components';
import logo from "../../assets/images/background.jpeg"
import useIsOwnerUser from '../../hooks/useIsOwnerUser';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const isOwner = useIsOwnerUser();

  return (
    <>
    {isOwner === false ? "" : (
    <GoToPageAdminLink to="/admin">
      Ir para a página de adminstrador
     </GoToPageAdminLink>)}
    <Container>
      <StyleDashboard>
        <span>
          <h1>Início</h1>
          <div
          >
            <h1>Produtos</h1>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          <h1>Contato</h1>
        </span>
      </StyleDashboard>
      <StyleContainer>
        <span>
          <div>
            <h1>Parcelamento </h1>
            <h2>em até 3x sem juros</h2>
            <ion-icon name="card"></ion-icon>
          </div>
          <div>
            <h1>Opções de retirada</h1>
            <h2>em Brasília</h2>
            <ion-icon name="home"></ion-icon>
          </div>
          <div>
            <h1>Jóias em PRATA</h1>
            <h2>925</h2>
            <ion-icon name="diamond"></ion-icon>
          </div>
        </span>
      </StyleContainer>
    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyleDashboard = styled.div`
  width: 100%;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #ACE4D3;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
  }

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #262626;
  }

  ion-icon {
    width: 15px;
    height: 13px;
    color: #6CBFA6;
  }
`;


const StyleContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  box-sizing: border-box;
  height: 71px;
  border: 1px solid #ACE4D3;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 3px;

  span {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  ion-icon {
    color: #FFFFFF;
    width: 25px;
    height: 18px;
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    color: #262626;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    color: #979797;
  }
`;


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

