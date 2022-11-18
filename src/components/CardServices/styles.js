import styled from 'styled-components/native';

export const Titulo = styled.Text`
font-size: 19px;
font-family: OpenSans-Regular;
color: black;
margin-left: 15px;
margin-top: 25px;
`;

export const Container = styled.View`
margin: 10px;
margin-top: 10px;
flex-direction: row;
justify-content: space-around;
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
