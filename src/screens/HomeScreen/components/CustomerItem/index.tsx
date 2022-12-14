import React from 'react';
import { ListItem, Icon } from 'react-native-elements';
import { Button } from '@rneui/themed';
import { useNavigation, useTheme } from '@react-navigation/native';
import { View, Image, StyleSheet } from 'react-native';
import { VStack, Box } from '@react-native-material/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../models/route';
import ConfirmDialog from '../../../../components/ConfirmDialog';
import SuccessDialog from '../../../../components/SuccessDialog';
import { Customer } from '../../../../models/customer';

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

type Props = {
    customer?: Customer;
};

function CustomerItem({ customer }: Props) {
    //State
    const [expanded, setExpanded] = React.useState<boolean>(false);

    //Dialog
    const [deleteDialog, setDeleteDialog] = React.useState<boolean>(false);
    const [successDialog, setSuccessDialog] = React.useState<boolean>(false);

    //Hooks
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    //Theme
    const { colors } = useTheme();

    const handleEdit = (id: number, name: string | undefined) => {
        navigation.navigate('EditCustomer', {
            userId: id,
            name: name,
        });
    };

    //Handle dialog
    const handleConfirmDelete = () => {
        setSuccessDialog(true);
    };

    const handleCloseSuccessDialog = () => {
        setSuccessDialog(false);
        setDeleteDialog(false);
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <ConfirmDialog
                    isVisible={deleteDialog}
                    icon="delete"
                    title="Delete customer"
                    content="Do you want delete this customer?"
                    onClose={() => setDeleteDialog(false)}
                    onConfirm={handleConfirmDelete}
                />
                <SuccessDialog
                    isVisible={successDialog}
                    content={`Delete customer ${customer?.name} successfully!`}
                    onPress={handleCloseSuccessDialog}
                />
            </React.Fragment>
            <ListItem.Accordion
                content={
                    <React.Fragment>
                        <View style={{ marginRight: 10 }}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://static.vncommerce.com/avatar/90C74E26FB-default.jpg',
                                }}
                            />
                        </View>
                        <ListItem.Content>
                            <ListItem.Title>{customer?.name}</ListItem.Title>
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
                        <ListItem.Title>Name: {customer?.name}</ListItem.Title>
                        <ListItem.Subtitle>
                            Phone: {customer?.phoneNumber}
                        </ListItem.Subtitle>
                        <ListItem.Subtitle>
                            Email: {customer?.email}
                        </ListItem.Subtitle>
                        <ListItem.Subtitle>
                            Address: {customer?.address}
                        </ListItem.Subtitle>
                        <ListItem.Subtitle>
                            Reason: {customer?.reason}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <VStack spacing={10}>
                        <Box>
                            <Button
                                buttonStyle={{ borderRadius: 10 }}
                                onPress={() =>
                                    handleEdit(
                                        Number(customer?.id),
                                        customer?.name,
                                    )
                                }
                            >
                                <Icon
                                    size={20}
                                    name="edit"
                                    color="white"
                                    tvParallaxProperties={undefined}
                                />{' '}
                                Edit
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                buttonStyle={{ borderRadius: 10 }}
                                color="error"
                                onPress={() => setDeleteDialog(true)}
                            >
                                <Icon
                                    size={20}
                                    name="delete"
                                    color="white"
                                    tvParallaxProperties={undefined}
                                />{' '}
                                Delete
                            </Button>
                        </Box>
                    </VStack>
                </ListItem>
            </ListItem.Accordion>
        </React.Fragment>
    );
}
export default React.memo(CustomerItem);
