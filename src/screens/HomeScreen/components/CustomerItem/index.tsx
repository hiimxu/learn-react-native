import React from 'react';
import { ListItem, Icon } from 'react-native-elements';
import { Button } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { VStack, Box } from '@react-native-material/core';

type Props = {
    customer?: {
        id: number;
        lastName: string;
        firstName: string;
        phone: string;
        address: string;
    };
};

function CustomerItem({ customer }: Props) {
    //State
    const [expanded, setExpanded] = React.useState<boolean>(false);

    //Theme
    const { colors } = useTheme();

    //handle
    const editCustomer = () => {};

    return (
        <ListItem.Accordion
            content={
                <React.Fragment>
                    <View style={{ marginRight: 10 }}>
                        <Icon
                            name="person"
                            size={30}
                            tvParallaxProperties={undefined}
                            color="#0d80d8"
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title>
                            {customer?.firstName} {customer?.lastName}
                        </ListItem.Title>
                    </ListItem.Content>
                </React.Fragment>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}
        >
            <ListItem
                bottomDivider
                hasTVPreferredFocus={undefined}
                tvParallaxProperties={undefined}
            >
                <ListItem.Content>
                    <ListItem.Title>
                        First Name: {customer?.firstName}
                    </ListItem.Title>
                    <ListItem.Title>
                        Last Name: {customer?.lastName}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        Phone: {customer?.phone}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                        Address: {customer?.address}
                    </ListItem.Subtitle>
                </ListItem.Content>
                <VStack spacing={10}>
                    <Box>
                        <Button>Edit</Button>
                    </Box>

                    <Box>
                        <Button color="error">Delete</Button>
                    </Box>
                </VStack>
            </ListItem>
        </ListItem.Accordion>
    );
}
export default React.memo(CustomerItem);
