import { ActivityIndicator, View } from "react-native"
import { useFetch } from "../hooks/useFetch"

import { ProductCard } from "./"


export const ProductList = () => {

    const { data: products, isLoading, error } = useFetch('/products')

    
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
                products.map((product) => (
                    <ProductCard product={ product }/>
                ))
            }
        </View>
    )
}
