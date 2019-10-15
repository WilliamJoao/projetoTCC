import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Background } from '../../components/Background';
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SingLink,
    SignLinkText,
    Title,
} from './styles';

export default function SignUn({ navigation }) {
    const passwordRef = useRef();
    const emailRef = useRef();

    return (
        <Background>
            <Container>
                <Form>
                    <Title>Criar conta</Title>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome completo"
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current.focus()}
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu Email"
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua Senha"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={() => {}}
                    />

                    <SubmitButton onpress={() => {}}>Acessar</SubmitButton>
                </Form>
                <SingLink onPress={() => navigation.navigate('SignIn')}>
                    <SignLinkText>Já tenho conta</SignLinkText>
                </SingLink>
            </Container>
        </Background>
    );
}

SignUn.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
