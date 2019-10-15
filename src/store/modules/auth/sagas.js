import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import NavigationService from '../../../services/navigation';
import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.get, 'users');
        const { user, token } = response.data[0];

        if (!user) {
            Alert.alert('Erro no login', 'Dados do usuário inválido');
            yield put(signFailure());
            return;
        }

        if (email === user.email && password === user.password) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            yield put(signInSuccess(token, user));
            NavigationService.navigate('Home');
        }
    } catch (err) {
        Alert.alert(
            'Falha na autenticação',
            'Houve um erro no login, verifique seus dados'
        );
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
            provider: true,
        });
    } catch (err) {
        Alert.alert('Falha no cadastro, verifique seu dados');
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
