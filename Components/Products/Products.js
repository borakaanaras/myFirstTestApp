import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './Products.style';

const Products = ({pati}) => {
    return(
        <View style = {styles.container}>

            <View style = {styles.body}>
                <View style = {styles.top}>
                    <Image style = {styles.image} source={{uri: pati.imgURL}} />
                </View>

                <View style = {styles.bottom}>
                    <Text style = {styles.title}> {pati.title} </Text>
                    <Text style = {styles.price}> {pati.price} </Text>
                    <Text style = {styles.inStock}> {pati.inStock ? "" : "STOKTA YOK"} </Text>
                </View>

            </View>

        </View>
    )
}
 
export default Products;