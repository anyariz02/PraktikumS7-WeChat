import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GetUsers } from "@/api/GetUsers";
import { useState } from "react";

export default function Users() {
  const [data, setData] = useState(null);

    GetUsers.then(result => {
      setData(result?.data.data);
    });

  const renderOptionItem = (icon: string, text: string, color: string) => (
    <TouchableOpacity style={styles.optionItem}>
      <View style={[styles.iconBackground, { backgroundColor: color }]}>
        <FontAwesome name={icon} size={20} color="#fff" />
      </View>
      <Text style={styles.optionText}>{text}</Text>
      <FontAwesome
        name="chevron-right"
        size={16}
        color="#c0c0c0"
        style={styles.chevronIcon}
      />
    </TouchableOpacity>
  );

  const renderUserItem = ({ item }: { item: any }) => (
    <View style={styles.userItem}>
      <Image
        source={{ uri: item.avatar }}
        style={styles.avatar}  
      />
      <Text style={styles.firstName}>{item.first_name}  </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.options}>
        {renderOptionItem("user-plus", "Teman Baru", "#FFD700")}
        {renderOptionItem("user", "Obrolan Grup", "#3abbc9")}
        {renderOptionItem("tag", "Tag", "#0077C0")}
        {renderOptionItem("user", "Akun Resmi", "#0077C0")}
      </View>

      <FlatList
        data={data}
        renderItem={renderUserItem}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    flex: 1, 
  },
  options: {
    marginBottom: 16,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
    backgroundColor: "#ffff",
  },
  iconBackground: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: "#000",
  },
  chevronIcon: {
    position: "absolute",
    right: 16,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10, 
    marginRight: 16,
    backgroundColor: "#ff0000", 
  },
  firstName: {
    fontSize: 16,
    color: "#000",
  },
});
