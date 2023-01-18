import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const CobaModal = () => {
  const [nama, setNama] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const onPressHendler = () => {
    if (nama.length > 3) {
      setIsSubmited(!isSubmited);
    } else {
      setIsShow(true);
    }
  };
  return (
    <View style={styles.container}>
      <Modal
        visible={isShow}
        // Method ketika user klik tombol back di hp
        onRequestClose={() => setIsShow(false)}
        transparent
        animationType="fade" // or slide
        hardwareAccelerated
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <View style={styles.modalTitle}>
              <Text style={styles.modalTitleText}>Congratulations</Text>
            </View>
            <View style={styles.modalBody}>
              <Text style={styles.modalIcon}>🎁</Text>
              <Text style={styles.modalBodyText}>
                Selamat, anda mendapatkan seorang bitches!!!
              </Text>
            </View>
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.buttonModal}
                onPress={() => setIsShow(false)}
              >
                <Text style={styles.buttonModalText}>Claim Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TextInput
        style={styles.input}
        value={nama}
        onChangeText={(value) => setNama(value)}
        placeholder="Masukkan nama anda..."
      ></TextInput>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#940aca" : "#ca0a44" },
        ]}
        onPress={onPressHendler}
        android_ripple={{ color: "#1d0aca" }}
        hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
      >
        <Text style={styles.textButton}>{isSubmited ? "Clear" : "Submit"}</Text>
      </Pressable>

      {isSubmited && <Text style={styles.text}>Your name is {nama}</Text>}
    </View>
  );
};

export default CobaModal;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 60,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 30,
    color: "#8b8b8b",
    textAlign: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a64ca",
    borderRadius: 8,
  },

  textButton: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },

  textBlack: {
    color: "#8b8b8b",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  modalTitle: {},
  modalTitleText: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  modalBodyText: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 20,
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonModal: {
    width: "80%",
    paddingVertical: 10,
    backgroundColor: "#0a64ca",
    borderRadius: 10,
  },
  buttonModalText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  modalIcon: {
    fontSize: 60,
    marginBottom: 30,
    textAlign: "center",
  },
});
