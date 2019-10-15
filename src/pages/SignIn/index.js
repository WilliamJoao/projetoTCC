import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Background } from '../../components/Background';
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SingLink,
    SignLinkText,
    TitleIcon,
} from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn({ navigation }) {
    const dispatch = useDispatch();
    const passwordRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.auth.loading);

    function handleSubmit() {
        dispatch(signInRequest(email, password));
    }

    return (
        <Background>
            <Container>
                <Form>
                    <TitleIcon>
                        <Icon name="input" size={80} color="#FFF" />
                    </TitleIcon>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu Email"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                        values={email}
                        onChangeText={setEmail}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua Senha"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <SubmitButton loading={loading} onPress={handleSubmit}>
                        Acessar
                    </SubmitButton>
                </Form>
                <SingLink onPress={() => navigation.navigate('SignUp')}>
                    <SignLinkText>Criar Conta</SignLinkText>
                </SingLink>
            </Container>
        </Background>
    );
}

SignIn.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
