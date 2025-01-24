import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type OptionItemProps = {
  icon: string;
  text: string;
  color: string;
  style: any;
};

export default function Find() {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        {/* Modify this item to add the check icon */}
        <OptionItem
          icon="camera-retro"
          text="Moment"
          color="#09B83E"
          style={styles.optionItem}
          isChecked={true} // Pass isChecked as true for the checkmark
        />
        <OptionItem
          icon="qrcode"
          text="Pindai"
          color="#1E90FF"
          style={styles.optionItem}
        />
        <OptionItem
          icon="sheqel"
          text="Goyang"
          color="#1E90FF"
          style={styles.optionItem}
        />
        <OptionItem
          icon="asterisk"
          text="Cari"
          color="red"
          style={styles.optionItem}
        />
        <OptionItem
          icon="map"
          text="Orang di Sekitar"
          color="#1E90FF"
          style={styles.optionItem}
        />
         <OptionItem
          icon="dollar"
          text="Program Mini"
          color="#894AE7"
          style={styles.optionItem}
        />
      </View>
    </View>
  );
}

function OptionItem({
  icon,
  text,
  color,
  style,
  isChecked = false, // New prop to conditionally render checkmark
}: OptionItemProps & { isChecked?: boolean }) {
  return (
    <TouchableOpacity style={[styles.optionItem, style]}>
      {/* Icon with background */}
      <FontAwesome name={icon} size={20} color={color} />
      
      {/* Conditional Checkmark Icon */}
      

      {/* Text */}
      <Text style={styles.optionText}>{text}</Text>

      {isChecked && (
        <FontAwesome
          name="image"
          size={18}
          color="#6B7474"
          style={styles.checkIcon}
        />
      )}

      {/* Chevron Icon */}
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
  checkIcon: {
    marginRight: 28, // Adds space between the check icon and text
  },
});
