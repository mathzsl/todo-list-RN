import { Text, View } from "react-native";
import { styles } from "./styles";

export function Counter() {
  return (
    <View style={styles.container}>
      <View style={styles.countInfo}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_700Bold",
            color: "#4EA8DE",
          }}
        >
          Criadas
        </Text>

        <View style={styles.count}>
          <Text
            style={{ color: "#fff", fontSize: 12, fontFamily: "Inter_700Bold" }}
          >
            0
          </Text>
        </View>
      </View>

      <View style={styles.countInfo}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_700Bold",
            color: "#8284FA",
          }}
        >
          Concluídas
        </Text>
        <View style={styles.count}>
          <Text
            style={{ color: "#fff", fontSize: 12, fontFamily: "Inter_700Bold" }}
          >
            0
          </Text>
        </View>
      </View>
    </View>
  );
}
