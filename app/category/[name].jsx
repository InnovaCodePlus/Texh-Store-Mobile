import React from 'react'
import { Stack, useSearchParams } from 'expo-router'
import { SafeAreaView, ScrollView, View } from 'react-native'

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
                    

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CategoryScreen