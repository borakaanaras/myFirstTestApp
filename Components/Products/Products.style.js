import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        margin: 7,
        borderRadius: 10,
        marginLeft: 0,
        width: 180,
    },
    body: {
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
    },
    top: {
        marginLeft: 5,
        marginRight:5
    },
    bottom: {
        marginTop:3,
        marginBottom:4
    },
    title: {     
        fontWeight: 'bold',
        width: 120,      
    },
    price: {
        color: '#808080',
        fontWeight: 'bold'
    },
    inStock: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#6495ed'
    }
    
});