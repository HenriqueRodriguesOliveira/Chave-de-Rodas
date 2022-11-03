import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1;
background-color: #FFF;
justify-content: center;
align-items: center;
`;

export const Container = styled.View`
flex-direction: column;
align-items: center;
`;

export const Titulo = styled.Text`
color: black;
font-weight: bold;
font-size: 25px;
`;

export const Imagem = styled.Image`
width: 100px;
height: 100px;
margin: 30px;
`;

export const AreaInput = styled.View`
flex-direction: column;
width: 90%;
margin-top: 20px;
`;

export const Input = styled.TextInput`
background-color: #eee;
height: 100px;
font-size: 17px;
color: #000;
border-radius: 7px;
`;

export const TextoInput = styled.Text`
font-size: 15px;
font-weight: bold;
margin-bottom: 10px;
`;

export const ButtonConfirmar = styled.TouchableOpacity`
height: 45px;
width: 150px;
background-color: #007D45;
border-radius: 7px;
right: 85px;
top: 30px;
`;

export const TextButton = styled.Text`
font-size: 14px;
text-align: center;
top: 12px;
color: white;
`;
