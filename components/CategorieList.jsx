import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { useFetch } from '../hooks/useFetch'
import { CategoryButton } from './CategoryButton';

export const CategorieList = () => {

    const {data, error, isLoading } = useFetch('/categories');


    if( isLoading ){
        return(
            <View>
                <ActivityIndicator color='#000'/>
            </View>
        )
    }

    return (
        <View style={{ marginBottom: 25 }}>
            <FlatList
                data={ data }
                horizontal
                renderItem={({ item }) => (
                    <CategoryButton name={ item.name }/>
                )}
                keyExtractor={({id}) => id}
                contentContainerStyle={{ columnGap: 12 }}
                showsHorizontalScrollIndicator={false}
            />   
        </View>
    )
}
