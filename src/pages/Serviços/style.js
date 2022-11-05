import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1;
background-color: #FFF;
`;

export const Template = styled.Image`
width: 100%;
height: 25%;
`;

export const Titulo = styled.Text`
text-align: center;
justify-content: center;
color: black;
font-size: 20px;
font-weight: bold;
margin: 15px;
`;

export const Container = styled.View`
flex-direction: column;
margin-left: 15px;
margin-top: 10px;
`;

export const ContainerCheck = styled.View`
flex-direction: row;
`;

export const Suspensao = styled.Text`
font-size: 18px;
color: black;
padding-right: 71px;
`;

export const Motor = styled.Text`
font-size: 18px;
color: black;
padding-right: 110px;
`;

export const Injecao = styled.Text`
font-size: 18px;
color: black;
padding-right: 50px;
`;

export const Servico = styled.Text`
font-size: 18px;
color: black;
padding-right: 50px;
`;

export const Valor = styled.Text`
font-size: 15px;
margin-bottom: 20px;
`;

export const ButtonConfirmar = styled.TouchableOpacity`
height: 45px;
width: 150px;
background-color: #007D45;
border-radius: 7px;
position: absolute;
left: 170px;
`;
export const TextButton = styled.Text`
font-size: 14px;
text-align: center;
top: 12px;
color: white;
`;