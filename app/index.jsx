import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CategorieList, Search } from '../components';



const Home = () => {
    return (
        <SafeAreaView 
            style={{ backgroundColor: 'white', flex: 1 }}
        >
            <ScrollView>
                <View style={{ flex: 1, padding:16 }}>
                    <Text style={ styles.textBienvenida }>
                        Bienvenido Mattias
                    </Text>
                    
                    <Search/>
                    
                    <CategorieList/>


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