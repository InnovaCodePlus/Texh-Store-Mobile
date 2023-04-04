
import { ActivityIndicator, View } from 'react-native'
import { useFetch } from '../hooks/useFetch';
import { ProductCard } from './ProductCard';

export const ProductList = ({ url='' }) => {
    const {data, error, isLoading } = useFetch(`/products${ url.trim() == '' ? '' :  `?category=${url}` }`);


    if( isLoading ){
        return(
            <View>
                <ActivityIndicator color='#000'/>
            </View>
        )
    }

    return (
        <View>
            {
                data.map( product => (
                    <ProductCard product={ product }/>
                ))
            }
        </View>
    )
}

