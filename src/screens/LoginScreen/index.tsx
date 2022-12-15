import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import styled from 'styled-components';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/creators/auth';
import { authSelector } from '../../redux/selectors/authSelector';

//IMAGE

const Wrapper = styled(View)`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

const Card = styled(View)`
    padding: 20px;
`;

const CardHeader = styled(View)`
    display: flex;
    align-items: center;
    padding-bottom: 40px;
`;

const Title = styled(Text)<{ color?: string }>`
    color: ${(props) => props.color || 'white'};
    font-size: 35px;
    font-weight: 700;
`;

export default function LoginScreen() {
    const [username, setUsername] = React.useState<string | undefined>();
    const [password, setPassword] = React.useState<string | undefined>();

    //HOOKS
    const { colors } = useTheme();

    //Redux
    const { errMess } = useSelector(authSelector);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (username && password) {
            dispatch(login({ username, password }));
        } else {
            alert('Please enter your username and password!');
        }
    };

    return (
        <Wrapper style={{ backgroundColor: colors.card }}>
            <Card>
                <CardHeader>
                    <Title color={colors.text}>Login</Title>
                </CardHeader>
                <Input
                    style={{ color: colors.text }}
                    placeholder="Username"
                    autoCompleteType={undefined}
                    autoCapitalize="none"
                    value={username}
                    onChangeText={setUsername}
                />
                <Input
                    style={{ color: colors.text }}
                    placeholder="Password"
                    autoCompleteType={undefined}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                />
                <Button title="Login" onPress={handleSubmit} />
            </Card>
            <View>
                <Text style={{ color: colors.text }}>{errMess && errMess}</Text>
            </View>
        </Wrapper>
    );
}
