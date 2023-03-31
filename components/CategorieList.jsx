import { Text, View } from 'react-native'
import { useFetch } from '../hooks/useFetch'

export const CategorieList = () => {

    const {data, error, isLoading } = useFetch('/categories');

    if( isLoading ){
        return(
            <View>
                <Text>Cargando...</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>categorias</Text>
            
        </View>
    )
}
