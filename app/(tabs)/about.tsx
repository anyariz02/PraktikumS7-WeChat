import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type OptionItemProps = {
  icon: string;
  text: string;
  color: string;
  style: any;
};

export default function About() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Rizwan Fauzie Maulana</Text>
          <Text style={styles.userId}>ID WeChat: anyariz02</Text>

          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.statusButton}>
              <Text style={styles.statusText}>+ Status</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="refresh" size={18} color="#666" />
            </TouchableOpacity>
           </View>
        </View>
      </View>

      <View style={styles.options}>
        <OptionItem icon="check-circle" text="Layanan" color="#09B83E" style={styles.optionItem} />
        <OptionItem icon="cube" text="Pesan Favorit" color="#FF6347" style={styles.optionItem} />
        <OptionItem icon="image" text="Pos Saya" color="#1E90FF" style={styles.optionItem} />
        <OptionItem icon="smile-o" text="Sticker Gallery" color="#FFD700" style={styles.optionItem} />
        <OptionItem icon="cog" text="Pengaturan" color="#1E90FF" style={styles.optionItem} />
      </View>
    </View>
  );
}

function OptionItem({ icon, text, color, style }: OptionItemProps) {
  return (
    <TouchableOpacity style={[styles.optionItem, style]}>
      {/* Ikon utama */}
      <FontAwesome name={icon} size={20} color={color} />
      {/* Teks */}
      <Text style={styles.optionText}>{text}</Text>
      {/* Ikon chevron-right di pojok kanan */}
      <FontAwesome
        name="chevron-right"
        size={16}
        color="#c0c0c0"
        style={styles.chevronIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 16,
    marginBottom: 42,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  userId: {
    fontSize: 14,
    color: "#666",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  statusButton: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    color: "#666",
  },
  options: {
    marginTop: 8,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
    marginBottom: 10,
    backgroundColor: "#ffff",
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
});
