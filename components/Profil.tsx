import { FlatList, StyleSheet, Text, View } from "react-native";
import { Image } from 'expo-image';

export default function Profil() {
    return (
    <View style={styles.profil}>
        <Image source="https://avatars.githubusercontent.com/u/129917407?v=4" style={styles.gambarProfil} />
            <View style={styles.teksContainer}>
                <Text style={styles.teksTebal}>AnyaRiz</Text>
                <Text>anyanime.id@gmail.com</Text>
                <Text>085701995362</Text>
            </View>  
    </View>  
    )
}

const styles = StyleSheet.create({
    gambarProfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginEnd: 12,
    },
    profil:{
        justifyContent: 'center',
        alignItems:'center',
        padding: 6,
        height: 72
    },
    teksTebal:{
        fontWeight: 'bold',
        fontSize: 18
    },
    teksContainer:{
        justifyContent: "space-around",
        alignItems:'center',
        fontSize: 100,
        flex: 1,
        height: 100
    }
})
