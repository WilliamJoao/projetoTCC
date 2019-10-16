import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alternativa } from '../../components/Background';
import colors from '../../styles/colors';

export const Background = styled(Alternativa)``;

export const Container = styled.View`
    padding: 10px;
`;

export const List = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    background: #fff;
    border-radius: 4px;
    margin-top: 50px;
`;

export const IconList = styled(Icon).attrs({
    name: `format-list-bulleted`,
    size: 40,
    color: `#7159c1`,
})`
    margin-left: 10px;
`;

export const ViewText = styled.View`
    flex-direction: row;
    margin-left: 10px;
`;

export const ViewTitle = styled.View`
    margin-left: 20px;
`;

export const Title = styled.Text`
    /* justify-content: flex-start;
    align-items: flex-start; */
    left: 0px;
    font-size: 16px;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    color: #555;
`;

export const IconShowProducts = styled(Icon).attrs({
    name: `chevron-right`,
    size: 40,
    color: `#7159c1`,
})`
    margin-right: 10px;
    /* align-items: flex-end; */
    justify-content: flex-end;
`;

export const Fab = styled.TouchableOpacity`
    position: absolute;
    width: 80px;
    height: 80px;
    text-align: center;
    border-radius: 40px;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    background: ${colors.primary};
    right: 10px;
    bottom: 160px;
`;
