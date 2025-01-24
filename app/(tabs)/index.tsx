import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from 'expo-image';

import Card from "@/components/Card";

export default function Chat() {
  return (
      <ScrollView style={styles.container}>
        <FlatList 
        data={dataCard.posts}
          renderItem={({ item, index}) => (  
        <Card
          id={item.id} 
          sumberGambar={item.sumberGambar}
          judul={item.judul}
          keterangan={item.keterangan}
          waktu={item.waktu}
        />
      )}
    />
  </ScrollView>
  );
}
const dataCard = require('@/assets/dataCard.json');

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
    backgroundColor: '#FCFDFD',
  },
});
