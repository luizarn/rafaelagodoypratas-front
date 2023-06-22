import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useToken from '../../hooks/useToken';

export default function Cart() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [attProducts, setAttProducts] = useState(false);
  const token = useToken();

  useEffect(() => {
    const response = axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/cart/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    response
      .then((res) => {
        setProductsInCart(res.data);
        console.log(res.data);
        setAttProducts(false);
      })
      .catch((err) => console.log(err));
  }, [attProducts]);

  async function deleteProduct(id) {
    try {
      console.log(id);
      if (confirm('Confirma a remoção deste produto?')) {
        await axios.delete(
          `${import.meta.env.VITE_API_BASE_URL}/cart/user/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAttProducts(true);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <ProductsContainer>
      {!productsInCart || productsInCart.length === 0 ? (
        <div style={{ height: '350px' }}>
          <p>Carrinho de Compras</p> <br></br> <br></br>
          <h3>
            Seu carrinho está vazio. <br></br> <br></br>
            Para continuar comprando, navegue pelo menu do site, faça uma busca pelo seu produto ou clique no botão abaixo.
          </h3>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <StyledButton>Escolher Produtos</StyledButton>
          </Link>
        </div>
      ) : (
        <>
          <p>Carrinho de Compras</p> <br></br>
          {productsInCart.map((p) => (
            <UnicItem key={p.id}>
              <div>
                <ImageInfo>
                  <Link to={`/produtos/${encodeURIComponent(p.product.title)}`} style={{ textDecoration: 'none' }}>
                    <img src={p.product.publicUrl} alt="Logotipo" />
                  </Link>
                  <ContainerInfos>
                    <Link to={`/produtos/${encodeURIComponent(p.product.title)}`} style={{ textDecoration: 'none' }}>
                      <h1>{p.product.title}</h1>
                    </Link>
                    <h2>R$ {parseFloat(p.product.price).toFixed(2).replace('.', ',')}</h2>
                    <br></br>
                    <h1>
                      ou <span>3x</span> de <span>R$ {parseFloat(p.product.price / 3).toFixed(2).replace('.', ',')}</span> sem juros
                    </h1>
                  </ContainerInfos>
                </ImageInfo>
              </div>
              <div>
                <ion-icon onClick={() => deleteProduct(p.id)} name="trash-outline"></ion-icon>
              </div>
            </UnicItem>
          ))}
        </>
      )}
    </ProductsContainer>
  );
}

const ImageInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
  img {
    width: 130px;
    height: 190px;
    border-radius: 25px;
    margin-right: 30px;
  }
`;

const ContainerInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #262626;
  margin: 10px 10px;
  font-family: 'Ubuntu Mono';
  margin-bottom: 20px;
  h2 {
    font-weight: 800;
    color: #6cbfa6;
    font-size: 25px;
  }
  h1 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 18px;
  }
  span {
    font-weight: 900;
  }
`;

const ProductsContainer = styled.div`
  width: 70%;
  margin:80px auto;
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-family: 'Ubuntu Mono';
    font-size: 34px;
    font-weight: 900;
  }
  h3 {
    font-size: 18px;
  }
`;

const StyledButton = styled.button`
  height: 50px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  background: rgba(108, 191, 166, 0.9);
  border: 1px solid #ace4d3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  color: #ffffff;
  margin-left: 20px;
  text-decoration: none;
  margin-top: 30px;
`;

const UnicItem = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  border-bottom: 3px solid #dbdbdb;
  display: flex;
  align-items: center;
  ion-icon {
    width: 30px;
    height: 80px;
    border-radius: 25px;
    margin-left: 200px;
  }
`;
