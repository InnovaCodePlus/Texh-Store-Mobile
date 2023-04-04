import { Stack, useSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, View } from 'react-native'

import { ProductList } from '../../components';

const CategoryScreen = () => {
    const { name } = useSearchParams();

    return (
        <SafeAreaView 
            style={{ backgroundColor:'white',  flex: 1 }}
        >
            <Stack.Screen options={{
                headerStyle: { backgroundColor:'white' },
                headerShadowVisible: false,
                headerTitle: name,
                headerTitleAlign:'center',
            }}/>
            <ScrollView>
                <View style={{ flex: 1, margin:16 }}>
                    <ProductList url={ name }/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CategoryScreen