import { useRouter } from 'expo-router'
import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ProductCard = ({ product }) => {

    const router = useRouter();
    const handleNavigation = ( term ) => {
        router.push(`/product/${term}`)
    }

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={ () => handleNavigation('1') }>
            <View style={ styles.container }>
                <Image
                    source={{ uri: product.images[0] }}
                    style={{ width: 160, height: 160 }}
                    />
                <View>
                    <Text style={{ fontWeight:'bold', fontSize:20, maxWidth:200 }}>{ product.name }</Text>
                    <Text>{ product.category }</Text>
                    <View style={{ flex:1/3 }}></View>
                    <Text>Precio: ${ product.price }</Text>
                </View>
            </View>
            <View style={  styles.divider }></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems: 'center'
    },
    divider:{
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0, 0.1)',
        marginVertical: 30
    }
});
