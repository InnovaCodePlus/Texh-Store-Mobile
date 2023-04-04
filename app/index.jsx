import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router';

import { CategorieList, ProductList, Search } from '../components';

const Home = () => {

    const optionsHeader = {
        headerStyle: { backgroundColor: 'white' },
        headerShadowVisible : false,
        headerTitle: 'Tech Store',
        headerTitleAlign: 'center'
    }


    
    return (
        <SafeAreaView 
            style={{ backgroundColor: 'white', flex: 1 }}
        >

            <Stack.Screen options={ optionsHeader }/>

            <ScrollView>
                <View style={{ flex: 1, padding:16 }}>
                    <Text style={ styles.textBienvenida }>
                        Bienvenido Mattias
                    </Text>
                    
                    <Search/>
                    
                    <Text style={ styles.title }>Categorias</Text>
                    <CategorieList/>

                    <Text style={ styles.title }>Todos los productos</Text>
                    <ProductList/>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textBienvenida: {
        fontSize: 26,
        fontWeight: '400'
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

export default Home;