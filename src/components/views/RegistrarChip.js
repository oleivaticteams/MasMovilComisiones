import React, { useState } from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Input, Item, Button, Icon } from "native-base";
import { CustomHeader } from "molecules";
import DefaultStyles from "styles/defaultStyles";

let today = new Date().toISOString().slice(0, 10);
const screenWidth = Dimensions.get("window").width;

const RegistrarChip = () => {
  const [state, setstate] = useState("");
  return (
    <View style={DefaultStyles.container}>
      <CustomHeader />
      <Text
        style={{
          ...DefaultStyles.boldOrangeText,
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        Escanea el Bar Code del Chip
      </Text>
      <Icon type="Ionicons" name="barcode-outline" style={styles.iconblack} />
      <View style={styles.internalcontainer}>
        <Icon
          type="Ionicons"
          name="camera"
          style={{ fontSize: 80, color: "#707070" }}
        />
        <Text
          style={{
            ...DefaultStyles.boldOrangeText,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Presione la camara para escanear el código
        </Text>

        <View style={styles.centering}>
          <Item rounded style={{ borderRadius: 10, marginBottom: 5 }}>
            <Input
              placeholder="Ingrese manualmente"
              placeholderTextColor="#FF4713"
              style={{
                ...DefaultStyles.normalOrangeText,
                textAlign: "center",
              }}
              keyboardType={"decimal-pad"}
              onChangeText={(text) => {
                setstate(text);
              }}
              value={state}
            />
          </Item>
        </View>
        <Button
          full
          rounded
          style={styles.btn}
          onPress={() => console.log("Registrar")}
        >
          <Text style={DefaultStyles.buttonText}>Registrar Chip</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconblack: {
    fontSize: 30,
    color: "#000000",
    marginTop: 5,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  internalcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "80%",
    alignSelf: "center",
  },
  centering: {
    marginTop: 20,
    width: "80%",
    marginVertical: 30,
  },
});

export default RegistrarChip;
