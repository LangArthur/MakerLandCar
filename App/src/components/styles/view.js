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
        margin: 4,
    },

    program: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: 4,
    },

    flatlistitem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 250,
        borderRadius: 10,
        backgroundColor: 'grey',
        margin: 4,
    },

    itemtext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 4,
        marginRight: 4,
    },

    touchable: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    icon: {
        margin: 10,
    },

    ide: {
        flex: 1,
    },
});

export default ViewStyles;