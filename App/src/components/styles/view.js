/**
 * Button styles.
 * 
 * @author Ltabis
 * @date 02/03/2020
 */

import { StyleSheet } from 'react-native';

const ViewStyles = StyleSheet.create({

    content: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    instructions: {
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center',
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'blue',
        margin: 4,
    },

    flatlistitem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 250,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'grey',
    },

    itemtext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 4
    },

    touchable: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    ide: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
    },
});

export default ViewStyles;