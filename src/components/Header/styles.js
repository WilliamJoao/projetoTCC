import styled from 'styled-components/native';
import Input from '../Input';

export const Wrapper = styled.SafeAreaView`
    display: flex;
`;

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: -50px;
`;

export const BasketContainer = styled.TouchableOpacity`
    display: flex;
    align-self: center;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
    align-items: center;
    top: 10px;
`;

export const BackContainer = styled.TouchableOpacity`
    display: flex;
    align-self: center;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
    align-items: center;
    top: 2px;
`;

export const ItemCount = styled.Text`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #ff8c00;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    top: -45px;
    right: -5px;
    margin-left: 20px;
`;

export const InputText = styled(Input)`
    background: rgba(0, 0, 0, 0.2);
    width: 60%;
`;
