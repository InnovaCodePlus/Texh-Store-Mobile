import { useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity } from "react-native"


export const CategoryButton = ({ name }) => {

    const router = useRouter()
    

    const handleNavigation = ( term ) => {
        router.push(`/category/${ term }`)
    }


    return (
        <TouchableOpacity
            style={ styles.button }
            activeOpacity={ 0.6 }
            onPress={() => handleNavigation(name)}
        >
            <Text style={{ color:'white' }}>{ name }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 10,
    }
})