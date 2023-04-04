import { StyleSheet, Text, TouchableOpacity } from "react-native"


export const CategoryButton = ({ name }) => {

    return (
        <TouchableOpacity
            style={ styles.button }
            activeOpacity={ 0.6 }
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