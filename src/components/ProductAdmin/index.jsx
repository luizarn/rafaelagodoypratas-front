import PropTypes from 'prop-types';
import styled from 'styled-components';
export default function ListProductsEdition({ image, title, description, price, storage, category, tag }) {
    return (
                <ContainerStyle>
                    <ImageInfo>
                    <img src={image} alt="Logotipo" />
                    <ContainerInfos>
                        <h1><span>Titulo: {title}</span></h1>
                        <h1><span>Descrição:</span> {description}</h1>
                        <h1><span>Preço:</span> R$ {price}</h1>
                        <h1><span>Estoque:</span> {storage}</h1>
                        <h1><span>Categoria:</span> {category}</h1>
                        <h1><span>Tag:</span> {tag}</h1>
                    </ContainerInfos>
                    </ImageInfo>
                        <ContainerIcons>
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                        </ContainerIcons>
                </ContainerStyle>
 
    )
}

ListProductsEdition.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  storage: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

const ContainerStyle = styled.div`
  width: 100%;
  border: 1px solid #DBDBDB;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:10px;
`;

const ImageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 115px;
    height: 150px;
  }
`;
const ContainerIcons = styled.div`
    display: flex;
    ion-icon{
        width: 25px;
        height: 24px;
        margin-right: 30px;
        color: #6CBFA6;
    }
`

const ContainerInfos = styled.div`
font-family: 'Roboto';
font-style: normal;
line-height: 12px;
font-size: 14px;
display: flex;
justify-content: flex-start;
flex-direction: column;
color: #262626;
margin: 10px 10px;
span{
    font-weight: 900;
}
    h1{
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 10px;
        line-height: 18px;
    }
`