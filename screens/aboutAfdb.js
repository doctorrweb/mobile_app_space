import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableHighlight, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid"
import { Header, Button } from "native-base";

class AboutAfdb extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "About AfDB",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      //drawerLabel: "About AfDB",
      headerLeft: () => (
        <Ionicons
          style={{ paddingLeft: 20 }}
          color="#ffffff"
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      )
    };
  };

  render() {
    return (
      <Grid style={{ backgroundColor: "#000" }}>
        <ScrollView>
          <TouchableHighlight
            onPress={() => Linking.openURL("https://www.afdb.org/en/about/corporate-information")}>
            <Row size={1} style={{ padding: 10, height: 200 }}>
              <ImageBackground
                source={require("../assets/overview_afdb.png")}
                style={{ width: "100%", height: "100%", borderRadius: 30 }}
              >
                <View style={styles.container}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      color: "#ffffff",
                      paddingBottom: 10
                    }}
                  >
                    Corporate Information
              </Text>
                  <Button
                    bordered
                    small
                    style={{
                      borderColor: "#fff",
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingRight: 25,
                      paddingLeft: 25
                    }}
                    onPress={() => Linking.openURL("https://www.afdb.org/en/about/corporate-information")}
                  >
                    <Text style={{ color: "#fff" }}>View</Text>
                  </Button>
                </View>
              </ImageBackground>
            </Row>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL("https://www.afdb.org/en/about/mission-strategy")}>
            <Row size={1} style={{ height: 200 }}>
              <ImageBackground
                source={require("../assets/development.png")}
                style={{ width: "100%", height: "100%", borderRadius: 30 }}
              >
                <View style={styles.container}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      color: "#ffffff",
                      paddingBottom: 10
                    }}
                  >
                    Mission & Strategy
              </Text>
                  <Button
                    bordered
                    small
                    style={{
                      borderColor: "#fff",
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingRight: 25,
                      paddingLeft: 25
                    }}
                    onPress={() => Linking.openURL("https://www.afdb.org/en/about/mission-strategy")}
                  >
                    <Text style={{ color: "#fff" }}>View</Text>
                  </Button>
                </View>
              </ImageBackground>
            </Row>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL("https://www.afdb.org/en/about-us/organisational-structure")}>
            <Row size={1} style={{ height: 200 }}>
              <ImageBackground
                source={require("../assets/structure.png")}
                style={{ width: "100%", height: "100%", borderRadius: 30 }}
              >
                <View style={styles.container}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      color: "#ffffff",
                      paddingBottom: 10
                    }}
                  >
                    Structure
              </Text>
                  <Button
                    bordered
                    small
                    style={{
                      borderColor: "#fff",
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingRight: 25,
                      paddingLeft: 25
                    }}
                    onPress={() => Linking.openURL("https://www.afdb.org/en/about-us/organisational-structure")}
                  >
                    <Text style={{ color: "#fff" }}>View</Text>
                  </Button>
                </View>
              </ImageBackground>
            </Row>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL("https://www.afdb.org/en/about-us/frequently-asked-questions")}>
            <Row size={1} style={{ height: 200 }}>
              <ImageBackground
                source={require("../assets/history.png")}
                style={{ width: "100%", height: "100%", borderRadius: 30 }}
              >
                <View style={styles.container}>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      color: "#ffffff",
                      paddingBottom: 10
                    }}
                  >
                    Frequently asked questions
              </Text>
                  <Button
                    bordered
                    small
                    style={{
                      borderColor: "#fff",
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingRight: 25,
                      paddingLeft: 25
                    }}
                    onPress={() => Linking.openURL("https://www.afdb.org/en/about-us/frequently-asked-questions")}
                  >
                    <Text style={{ color: "#fff" }}>View</Text>
                  </Button>
                </View>
              </ImageBackground>
            </Row>
          </TouchableHighlight>
        </ScrollView>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 100,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AboutAfdb
