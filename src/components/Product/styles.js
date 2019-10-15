import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 15px;
    /* padding: 10px; */
    border-radius: 4px;
    background: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    width: 300px;
`;

export const Left = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 4px;
`;

export const Info = styled.View`
    display: flex;
    margin-left: 20px;
`;

export const Description = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-weight: bold;
    font-size: 15px;
    color: #666;
    width: 160px;
    margin-top: 20px;
    text-align: center;
`;

export const Price = styled.Text`
    color: #333;
    font-size: 13px;
    margin-top: 32px;
    text-align: right;
`;

export const Amount = styled.Text`
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #555;
    font-weight: bold;
`;

export const TouchableProduct = styled.TouchableOpacity`
    color: #fff;
    background: #480050;
`;

export const ViewAdd = styled.View`
    /* display: flex; */
    width: 50px;
    height: 128px;
    border-radius: 2px;
    /* margin-top: 20px; */
    background: #480050;
    align-items: center;
    justify-content: center;
    /* margin-right: cl0px; */
    /* padding: 20px; */
`;
