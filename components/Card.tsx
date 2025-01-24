import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from 'expo-image';
import { router } from "expo-router";

type Props = {
  id: number;
  sumberGambar: string;
  judul: string;
  keterangan: string;
  waktu: string;
};

const PlaceHolderImage = require('@/assets/images/naruto.jpg');

export default function Card({ id, sumberGambar, judul, keterangan, waktu }: Props) {
  const imageSoure = sumberGambar ? { uri: sumberGambar } : PlaceHolderImage;


  return (
    
    <View style={styles.panel}>
      <View style={styles.row}>
        
        <Image style={styles.image} source={imageSoure} />
        
        <View style={styles.textContainer}>
          <View style={styles.rowTitleTime}>
            <Text style={styles.text}>{judul}</Text>
            <Text style={styles.time}>{waktu}</Text>
          </View>

          <Text style={styles.textSummary}>{keterangan}</Text>
          
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginEnd: 15,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#250000',
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
  panel: {
    backgroundColor: '#ffff',
    padding: 0,
    borderRadius: 16,
    marginBottom: 16,
    paddingBottom: 10, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  textContainer: {
    flex: 1, 
  },
  rowTitleTime: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  textSummary: {
    fontSize: 15,
    color: '#b8b8b8',
  },
  divider: {
    height: 1,
    backgroundColor: '#dcdcdc',
    width: '100%',
    marginTop: 10,
  },
  time: {
    fontSize: 15,
    color: '#b8b8b8',
    paddingBottom: 10,
  },
});
