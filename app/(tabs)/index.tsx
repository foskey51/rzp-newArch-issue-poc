import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";

import RazorpayCheckout from "react-native-razorpay";

const TabOneScreen = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
      <SafeAreaView style={[styles.container, isDarkMode && styles.darkBg]}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={[styles.card, isDarkMode && styles.cardDark]}>
            <Text style={[styles.title, isDarkMode && styles.textDark]}>
              Razorpay Demo
            </Text>

            <Button
                title="Pay with Razorpay"
                onPress={() => {
                  const options = {
                    description: "Credits towards consultation",
                    image: "https://i.imgur.com/3g7nmJC.png",
                    currency: "INR",
                    key: '<API_KEY>', // replace with your "<API_KEY>"
                    amount: "5000",
                    name: "Foo Corp",
                    prefill: {
                      email: "void@razorpay.com",
                      contact: "9191919191",
                      name: "Razorpay Software",
                    },
                    theme: { color: "#F37254" },
                  };

                  RazorpayCheckout.open(options)
                      .then((data) => {
                        alert(`Success: ${data.razorpay_payment_id}`);
                      })
                      .catch((error) => {
                        alert(`Error: ${error.code} | ${error.description}`);
                      });
                }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  darkBg: {
    backgroundColor: "#000",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    elevation: 3,
  },
  cardDark: {
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
    color: "#111",
  },
  textDark: {
    color: "#fff",
  },
});

export default TabOneScreen;
