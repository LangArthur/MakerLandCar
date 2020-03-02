/**
 * Button component to connect to the car.
 * 
 * @author Ltabis
 * @date 02/03/2020
 */

import React from 'react';

// Button icon.
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ConnectButton: () => React$Node = () => {

    const navigation = useNavigation();

    return (
            <Button
                title="Se connecter à la MakerLandCar!"
                onPress={() => navigation.navigate('Programmer')}
            />
      );
};  

export default ConnectButton;