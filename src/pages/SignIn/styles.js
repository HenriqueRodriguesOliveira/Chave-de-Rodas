import styled from 'styled-components/native';


export const Background = styled.View`
flex: 1;
background-color: #FFF;
`;

export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`

height: 200px;
width: 200px;
`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput`
background-color: #f8f8f8;
margin: 10px;
width: 90%;
font-size: 17px;
color: #000;
border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #007D45;
width: 90%;
height: 45px;
border-radius: 30px;
margin-top: 10px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const TextButton = styled.Text`
color: #FFF;
font-weight: bold;
`;

export const ButtonReset = styled.TouchableOpacity`

`;

export const TextReset = styled.Text`
color: #b6b6b6;
font-weight: bold;
left: 27%;
`;


export const Div = styled.Text`
margin-top: 20px;
`;

export const ContainerButton = styled.View`
flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity`
margin: 15px;
padding: 8px;
border-radius: 10px;
border: 1px #e6e6e6;
`;

export const Icon = styled.Image`
height: 30px;
width: 30px;
`;

export const TextRegister = styled.Text`
color: #787878;
font-weight: bold;
`;

export const Link = styled.TouchableOpacity`

`;

export const LinkText = styled.Text`
color: #007D45;
font-weight: bold;
margin-left: 5px;
`;
