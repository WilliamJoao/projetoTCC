import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Background = styled(LinearGradient).attrs({
    colors: ['#7159C1', '#AB59C1'],
})`
    flex: 1;
`;

export const Alternativa = styled.View`
    background: #ddd;
    flex: 1;
`;
