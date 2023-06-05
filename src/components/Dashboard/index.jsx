import styled from 'styled-components';

export default function Dashboard() {
  return (
    <StyleDashboard>
      <span>
      <h1>Início</h1>
      <div>
        <h1>Produtos</h1>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      <h1>Contato</h1>
      </span>
    </StyleDashboard>
  )
}

const StyleDashboard = styled.div`
width: 100%;
height: 40px;
background: #FFFFFF;
border: 1px solid #ACE4D3;
border-radius: 3px;
display: flex;
justify-content:center;
text-align: center;
align-items: center;
span{
  width: 80%;
  display: flex;
justify-content:space-around;
text-align: center;
align-items: center;
margin: 0 auto;
  
}
div{
  display:flex;
}
h1{
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
    ion-icon{
        width: 15px;
        height: 13px;
        color: #6CBFA6;
    }
`


