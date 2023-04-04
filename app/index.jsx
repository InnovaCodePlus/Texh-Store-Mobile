import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CategorieList, ProductList, Search } from '../components';
import { Stack } from 'expo-router';



const Home = () => {
    return (
        <SafeAreaView 
            style={{ backgroundColor: 'white', flex: 1 }}
        >
            <Stack.Screen options={{
                headerStyle: { backgroundColor:'white' },
                headerShadowVisible: false,
                headerTitle: 'Tech Store',
                headerTitleAlign:'center',
            }}/>
            <ScrollView>
                <View style={{ flex: 1, margin:16 }}>
                    <Text style={ styles.textBienvenida }>
                        Bienvenido Mattias
                    </Text>
                    
                    <Search/>

                    <Text style={{ fontSize:22, fontWeight:'bold', marginBottom:10 }}>
                        Categorias
                    </Text>
                    <CategorieList/>

                    <Text style={{ fontSize:22, fontWeight:'bold', marginBottom:10 }}>
                        Todos los productos
                    </Text>
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
    }
});

export default Home;