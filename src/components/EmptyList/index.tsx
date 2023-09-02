import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/Clipboard.png")}
        style={{ marginTop: 48 }}
      />

      <View>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_700Bold",
            color: "#808080",
          }}
        >
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Inter_400Regular",
            color: "#808080",
          }}
        >
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
