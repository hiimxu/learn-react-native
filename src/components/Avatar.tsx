import { Image, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },
    tinyLogoCircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});

type Props = {
    uri: string | undefined;
    circle?: boolean;
    fallback?: string;
};

const Avatar = ({
    uri,
    circle = false,
    fallback:
        customFallback = 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg',
}: Props) => {
    const [fallback, setFallback] = React.useState('');
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <Image
            style={circle ? styles.tinyLogoCircle : styles.tinyLogo}
            source={{
                uri: fallback || uri,
            }}
            onError={handleError}
        />
    );
};

export default Avatar;
