import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export default function ListProductsByCategory() {
const { category } = useParams();
const [products, setProducts] = useState([]);

  useEffect(() => {
    const response = axios.get(`${import.meta.env.VITE_API_BASE_URL}/${category}`);
    response.then((res) => {
      setProducts(res.data);
    });
    response.catch((err) => console.log(err));
  }, [category]);
  
  return (
    <ProductsContainer>
      {products.length === 0 ? (
        <div style={{ height: "350px" }}>
          <p>Por enquanto não há produtos nessa categoria, aguarde..</p>
        </div>
      ) : (
        products.map((p) => (
          <ContainerStyle key={p.id}>
            <ImageInfo>
              <img src={p.publicUrl} alt="Logotipo" />
              <ContainerInfos>
                <h1>
                {p.title}
                </h1>
                <h2> R$ {parseFloat(p.price).toFixed(2).replace('.', ',')}</h2>
                <br></br>
                <h1><span>3x</span> de <span>R$ {parseFloat((p.price)/3).toFixed(2).replace('.', ',')}</span> sem juros</h1>
              </ContainerInfos>
            </ImageInfo>
          </ContainerStyle>
        ))
      )}
    </ProductsContainer>
  );
        }

const ContainerStyle = styled.div`
  width: 200px;
  border-bottom: 3px solid #DBDBDB;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 50px;
`;

const ImageInfo = styled.div`
  img {
    width: 250px;
    height: 350px;
    border-radius: 25px;
  }
`;

const ContainerInfos = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
color: #262626;
margin: 10px 10px;
font-family: 'Ubuntu Mono';
margin-bottom: 20px;
h2{
    font-weight: 800;
    color: #6CBFA6;
    font-size: 25px;
}
    h1{
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 10px;
        line-height: 18px;
    }
    span{
      font-weight: 900;
    }
`

const ProductsContainer = styled.div`
 display:flex;
 width: 80%;
 margin: 0 auto;
 min-height: 450px;
 p{
  margin-top: 100px;
  font-size: 18px;
 } 
`