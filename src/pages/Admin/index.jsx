import styled from "styled-components"
import useNameUser from '../../hooks/useNameUser';
import { Link } from "react-router-dom";
import logo from "../../assets/images/white_logo.png"
import ListProductsEdition from "../../components/ProductAdmin";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState(null)

const userName = useNameUser();
console.log(products)

useEffect(() => {
  const response = axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/products`);
  response.then((res) => {
    setProducts(res.data);
  });
  response.catch((err) => console.log(err));
}, []);

 return (
  <>
  <GoToPageAdminLink to="/">
  Ir para a página inicial do site
 </GoToPageAdminLink>
 <StyleNavBar>
                    <img src={logo} alt="Logotipo" />                  
                    
                </StyleNavBar>
    <Container>
      <p>OLá, {userName}! você está na página de edição dos seus produtos :)</p>
      <ContainerProducts>
        <TitleandAdd>
        <h2>PRODUTOS</h2>
        <div> <h3>Adicionar produto</h3>
        <Link to="/admin/products/new">
          <ion-icon name="add-circle-outline"></ion-icon>
          </Link>
          </div>
        </TitleandAdd>

      <input type="text" placeholder="Buscar produtos por nome" />
      {!products || products && products.length === 0 ? (
        <p>Não há produtos, adicione um produto clicando no ícone de adicionar acima!</p>) : (
 products.map((p) => (
  <ListProductsEdition 
    key={p.id}
    image={p.publicUrl}
    title={p.title}
    description={p.description}
    price={p.price}
    storage={p.quantity}
    category={p.Category.title}
    tag={p.Tag.title}
/> 
))
        )}
      </ContainerProducts>
    </Container>
    </>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: ${({ products }) => (!products || products && products.length === 0 ? "100vh" : "100%")}; */
  margin: 10px 10px;
  p{
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #000000;
  }
  h2{
    margin-top: 30px;
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #000000;
  }
  /* @media screen and (min-width: 800px) {
    img {
      margin-top: 100px;
    }
  } */
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
const StyleNavBar = styled.div`
width: 100%;
height: 100px;
background: #FFFFFF;
border: 1px solid #DBDBDB;
display: flex;
justify-content:space-around;
align-items: center;
img{
    width: 160px;
    height: 40px;
}
`
const ContainerProducts = styled.div`
width: 80%;
margin: 0 auto;
input{
    box-sizing: border-box;
    width: 100%;
    height: 40px;
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
`

const TitleandAdd = styled.div`
  display:flex;
  justify-content: space-between;

  h3{
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #000000;
  }
  ion-icon{
        width: 35px;
        height: 34px;
        margin-right: 30px;
        color: #6CBFA6;
        margin-left: 5px;
    }
    div{
      display:flex;
  align-items: center;
  text-align: center;
    }
`