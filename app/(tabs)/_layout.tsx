import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity, View, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          height: 55,
          backgroundColor: "#ededed", 
        },
        headerTitleStyle: {
          fontSize: 18, 
          textAlign: "center", 
        },
        
        tabBarStyle: {
          backgroundColor: '#ededed', 
          height: 70,
        },
        tabBarActiveTintColor: "#09B83E", 
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>

            <TouchableOpacity style={{ marginRight: 15 }}>
              <FontAwesome name="search" size={22} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={{
                width: 28,
                height: 28,
                borderRadius: 15, 
                borderWidth: 1,
                borderColor: "#000",
                justifyContent: "center", 
                alignItems: "center", 
              }}
            >
              <FontAwesome name="plus" size={16} color="#000" />
            </TouchableOpacity>
          </View>
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 5, 
          textAlign: "center",
        },
        tabBarItemStyle: {
          justifyContent: "center", 
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'WeChat',
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="comment" size={20} color={color} />
              <Text style={{ color: color, fontSize: 12 }}>Obrolan</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Kontak',
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="address-book" size={20} color={color} />
              <Text style={{ color: color, fontSize: 12 }}>Kontak</Text>
            </View>
          ),
        }}
      />
       <Tabs.Screen
        name="find"
        options={{
          title: 'Temukan',
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="compass" size={20} color={color} />
              <Text style={{ color: color, fontSize: 12 }}>Temukan</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={{ alignItems: 'center' }}>
              <FontAwesome name="user" size={20} color={color} />
              <Text style={{ color: color, fontSize: 12 }}>Saya</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
