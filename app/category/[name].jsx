import React from 'react'
import { Stack, useSearchParams } from 'expo-router'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { ProductList } from '../../components';

const CategoryScreen = () => {

    const { name } = useSearchParams();

    const optionsHeader = {
        headerStyle: { backgroundColor: 'white' },
        headerShadowVisible : false,
        headerTitle: `${ name }`,
        headerTitleAlign: 'center'
    }

    return (
        <SafeAreaView 
            style={{ backgroundColor: 'white', flex: 1 }}
        >
            <Stack.Screen options={ optionsHeader }/>

            <ScrollView>
                <View style={{ flex: 1, padding: 16 }}>
                    <ProductList url={ name }/>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CategoryScreen