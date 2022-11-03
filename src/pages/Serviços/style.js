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

export const ContainerMap = styled.View`
flex-direction: row;
`;

export const CheckBox = styled.TouchableOpacity`
width: 20px;
height: 20px;
border-radius: 4px;
border-width: 1px;
border-color: #007D45;
margin-right: 5px;
margin-top: 3px;
`;

export const Check = styled.Text`
align-self: center;
font-size: 12px;
`;

export const Servico = styled.Text`
font-size: 18px;
color: black;
margin-bottom: 35px;
`;

export const ButtonConfirmar = styled.TouchableOpacity`
height: 45px;
width: 150px;
background-color: #007D45;
border-radius: 7px;

`;

export const TextButton = styled.Text`
font-size: 14px;
text-align: center;
top: 12px;
color: white;
`;
