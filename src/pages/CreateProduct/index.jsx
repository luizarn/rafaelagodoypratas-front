import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/white_logo.png"
import background from "../../assets/images/background.jpeg"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import useToken from '../../hooks/useToken';

export default function Createroduct() {
const [categories, setCategories] = useState([]);
const [category, setSelectedCategory] = useState('');
const [tags, setTags] = useState([]);
const [tag, setSelectedTag] = useState('');
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [quantity, setQuantity] = useState('');
const [image, setImage] = useState('');
const token = useToken();
const navigate = useNavigate()

useEffect(() => {
  const response = axios.get(`${import.meta.env.VITE_API_BASE_URL}/categories`);
  response.then((res) => {
    setCategories(res.data);
  });
  response.catch((err) => console.log(err));

  const result = axios.get(`${import.meta.env.VITE_API_BASE_URL}/tags`);
  result.then((res) => {
    setTags(res.data);
  });
  result.catch((err) => console.log(err));
}, []);


async function addProduct(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('price', parseInt(price));
  formData.append('quantity', parseInt(quantity));
  formData.append('photo', image);
  formData.append('categoryId', parseInt(category));
  formData.append('tagId', parseInt(tag));

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/produtos`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response);
    console.log(response.data);
    navigate('/admin');
  } catch (err) {
    alert(err.response.data.message);
    setTitle('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setImage('');
    setSelectedCategory('');
    setSelectedTag('');
  }
}

 return (
  <>
  <GoToPageAdminLink to="/">
  Ir para a página inicial do site
 </GoToPageAdminLink>
 <StyleNavBar>
                    <img src={logo} alt="Logotipo" />                  
                    
                </StyleNavBar>
                <Container>
     <p>Preencha as informações do novo produto 💎 </p>
      <StyledForm onSubmit={addProduct}>
      <Label htmlFor="title">Título:</Label>
        <StyledInput
          name="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <Label htmlFor="description">Descrição:</Label>
        <StyledInput
          name="description"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <Label htmlFor="price">Preço:</Label>
        <StyledInput
          name="price"
          placeholder="R$ 0,00"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
        <Label htmlFor="storage">Estoque:</Label>
         <StyledInput
          name="storage"
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          required
        />
         <Label htmlFor="categoryId">Categoria:</Label>
      <StyledSelect
      name="categoryId"
      value={category}
      onChange={e => setSelectedCategory(e.target.value)}
    >
      <option value="">Selecione uma categoria</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.title}
        </option>
      ))}
    </StyledSelect>
    <Label htmlFor="tagId">Tag:</Label>
      <StyledSelect
        id="tagId"
        name="tagId"
        value={tag}
        onChange={e => setSelectedTag(e.target.value)}
      >
        <option value="">Selecione uma tag</option>
        {tags.map(tag => (
          <option key={tag.id} value={tag.id}>
            {tag.title}
          </option>
        ))}
      </StyledSelect>
      <Label htmlFor="tagId">Imagem (selecione um arquivo jpg, jpeg ou png):</Label>
      <StyledInput
          name="image"
          placeholder="Selecione um arquivo(jpg, jpeg ou png)"
          type="file"
          onChange={e => setImage(e.target.files[0])}
          required
        />
        <br></br>
{image ? <img src={URL.createObjectURL(image)} alt="Imagem" width="200" height="300" /> : <img src={background} alt="Imagem" width="200" height="300" />}<br /><br />

        
        <StyledButton type="submit">
          Cadastrar Produto
        </StyledButton>
      </StyledForm>
    </Container>
    </>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 10px;
  p{
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 900;
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
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`
const StyledInput = styled.input`
  width: 30%;
  height: 15px;
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ACE4D3;
  border-radius: 5px;
  font-size: 16px;
  line-height: 25px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};
  &::placeholder{
    color:  #000000;
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
  }
`
const StyledButton = styled.button`
  width: 30%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  background: rgba(108, 191, 166, 0.9);
  border: 1px solid #ACE4D3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  color: #FFFFFF;
`

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  width: 30%;
  font-size: 16px;
  margin-bottom: 8px;
`;

const StyledSelect = styled.select`
  width: 32%;
  height: 40px;
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ace4d3;
  border-radius: 5px;
  font-size: 16px;
  line-height: 25px;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#ffffff")};
  color: ${(props) => (props.disabled ? "#afafaf" : "#666666")};

  &::placeholder {
    color: #000000;
    font-weight: 400;
    font-size: 8px;
    line-height: 23px;
  }
  ::-webkit-input-placeholder {
    color: #999999;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #6cbfa6;
  }
`;