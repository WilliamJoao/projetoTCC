import { Platform } from 'react-native';

import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const Title = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;

export const FormInput = styled(Input)`
    background: rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
`;

export const SingLink = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const SignLinkText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;
