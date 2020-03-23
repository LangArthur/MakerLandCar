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
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        margin: 4,
    },

    programitem: {
        alignItems: 'center',
        width: 150,
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
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

    ide: {
        flex: 1,
    },
});

export default ViewStyles;