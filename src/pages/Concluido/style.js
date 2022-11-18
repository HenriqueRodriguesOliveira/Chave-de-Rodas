import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1;
background-color: #FFF;

`;

export const Container = styled.View`
flex-direction: column;
width: 400px;
height: 300px;
`;

export const Titulo = styled.Text`
color: black;
font-weight: bold;
font-size: 25px;
margin: 20px;
margin-left: auto;
margin-right: auto;
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
margin: 10px;

`;

export const Input = styled.TextInput`
background-color: #eee;
font-size: 17px;
color: #000;
border-radius: 7px;
left: 10px;
`;

export const TextoInput = styled.Text`
font-size: 15px;
font-weight: bold;
margin-right: auto;
margin-bottom: 10px;
left: 10px;
`;

export const ButtonConfirmar = styled.TouchableOpacity`
height: 45px;
width: 90%;
background-color: #293462;
border-radius: 7px;
left: 10px;
top: 10px;
margin: 10px;
`;

export const TextButton = styled.Text`
font-size: 14px;
text-align: center;
top: 12px;
color: white;
`;
