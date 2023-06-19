import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ListProduct() {
  const { titleProduct } = useParams();
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleIncrement = () => {
    if(product?.quantity < 1) return
    setAmount(amount + 1);
  };

  useEffect(() => {
    const decodedTitle = decodeURIComponent(titleProduct);
    const response = axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/produtos/${encodeURIComponent(decodedTitle)}`
    );
    response
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductsContainer>
         <ContainerStyle isSoldOut={product?.quantity === 0}>
        <div className="product-image">
          <img src={product?.publicUrl} alt="Logotipo" />
          <div className="sold-out-label">ESGOTADO</div>
        </div>
        <ContainerInfos>
          <h3>{product?.title}</h3>
          <h2>R$ {parseFloat(product?.price).toFixed(2).replace('.', ',')}</h2>
          <br></br>
          <h1>
            <ion-icon name="card-outline"></ion-icon>
            <span>3x</span> de{' '}
            <span>R$ {parseFloat(product?.price / 3).toFixed(2).replace('.', ',')}</span> sem juros
          </h1>
          <ContainerButtons>
            <AddButton disabled={product?.quantity < 1}>
              <h4 onClick={handleDecrement}>--</h4>
              {amount}
              <h4 onClick={handleIncrement}>+</h4>
            </AddButton>
            <StyledButton type="submit" disabled={product?.quantity < 1}>COMPRAR</StyledButton>
          </ContainerButtons>
          <div>
            <ion-icon name="bus-outline"></ion-icon> Meios de envio
          </div>

          <StyledInput
            name="password"
            placeholder="Seu CEP"
            type="password"
            required
          />
          <StyleButtonCep>CALCULAR</StyleButtonCep>
        </ContainerInfos>
      </ContainerStyle>
      <DescriptionText>
      <h4><span>TODAS</span> nossas joias são fabricadas em <span>PRATA 925</span> e possuem garantia.</h4>
      {product.description}
      </DescriptionText>
     
    </ProductsContainer>
  );
}

const ContainerStyle = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 50px;
  margin-bottom: 10px;

  .product-image {
    position: relative;
    width: fit-content;
    height: fit-content;
    border-radius: 25px;
    width: 473px;
    height: 600px;
    overflow: hidden;
  }

  .product-image img {
    display: block;
    width: 100%;
    height: auto;
  }

  .sold-out-label {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 5px;
    background-color: black;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
    opacity: ${(props) => (props.isSoldOut ? 1 : 0)};
    visibility: ${(props) => (props.isSoldOut ? 'visible' : 'hidden')};
    transition: opacity 0.3s, visibility 0.3s;
  }
`;


const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  font-family: 'Ubuntu Mono';
  margin-bottom: 20px;

  h2 {
    font-weight: 800;
    color: #6cbfa6;
    font-size: 40px;
    margin-top: 25px;
  }

  h1 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 15px;
    line-height: 18px;
    color: #8f34eb;
    text-align: center;
  }

  h3 {
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
    line-height: 18px;
  }

  span {
    font-weight: 900;
  }

  ion-icon {
    width: 30px;
    height: 27px;
  }
`;

const ProductsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 450px;
  border-bottom: 3px solid #dbdbdb;
  margin-bottom: 80px;
  p {
    margin-top: 100px;
    font-size: 18px;
  }
  span {
    font-weight: 900;
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
`;

const AddButton = styled.button`
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 0.6em 1.2em;
  font-size: 18px;
  font-weight: 500;
  color: black;
  cursor: pointer;
  margin-left: 20px;

  :hover {
    border-color: #6cbfa6;
  }

  h4 {
    font-weight: 900;
    font-size: 28px;
  }
`;

const ContainerButtons = styled.div`
margin-top: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 70px;
`;

const StyledInput = styled.input`
  width: 50%;
  height: 30px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  font-size: 16px;
  line-height: 25px;
  background-color: #ffffff;
  color: #666666;
  margin-bottom:0;
`;

const StyleButtonCep = styled.button`
  width: 30%;
  height: 50px;
  display: flex;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #ace4d3;
  color: rgba(108, 191, 166, 0.9);
`;

const DescriptionText = styled.div`
width:90%;
margin: 0 auto;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
`