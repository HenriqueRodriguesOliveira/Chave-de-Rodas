import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const ContainerRow = styled.View`
flex-direction: row;
justify-content: space-around;
top: 10px;
`;

export const Titulo = styled.Text`
font-size: 19px;
font-family: OpenSans-Regular;
color: black;
margin-left: 15px;
margin-top: 25px;
`;

export const Card = styled.TouchableOpacity`
border-radius: 15px;
flex-direction: row;
margin: 5px;
`;

export const ImageCard = styled.Image`
width: 280px;
height: 180px;
border-radius: 15px;
`;

export const ContainerMarcas = styled.View`
width: 75px;
height: 75px;
background-color: #FFF;
border-radius: 18px;
align-items: center;
justify-content: center;
`;

export const ImgMarca = styled.Image`
width: 50px;
height: 50px;
`;