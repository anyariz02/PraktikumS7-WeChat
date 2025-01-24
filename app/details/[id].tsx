import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from 'expo-image';
import { useLocalSearchParams } from "expo-router";


const dataCard = require('@/assets/dataCard.json');

type Post = {
    id: number;
    sumberGambar: string;
    judul: string;
    keterangan: string;
    waktu: string;
  };

export default function Detail(){
    const { id } = useLocalSearchParams<{ id: string}>();
    const filteredData = dataCard.posts.filter((item: Post) => {
        let idNumber: number
        idNumber = +id
        if (item.id == idNumber){
            return item
        }
    });

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={filteredData[0].sumberGambar}></Image>
            <View style={styles.bottom}>
                <Text style={styles.judul}>{filteredData[0].judul}</Text>
                <Text style={styles.judul}>{filteredData[0].keterangan}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bottom:{
        padding:24,
        borderRadius:24,
        marginTop:330,
        backgroundColor: "#fff",
        position: "absolute",
        width: "100%",
         height: "100%"
    },
    image:{
       width: "100%",
         height: "60%"
    },
    judul:{
        fontSize:24,
        marginBottom:24,
     },
     keterangan:{
        fontSize:15,
        marginBottom:24,
     },

    
});
