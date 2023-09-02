import { View, Image, FlatList, Text } from "react-native";

import { styles } from "./styles";
import { Form } from "../../components/Form";
import { EmptyList } from "../../components/EmptyList";
import { Counter } from "../../components/Counter";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={{ paddingHorizontal: 24 }}>
        <Form />

        <Counter />

        <FlatList
          keyExtractor={(item) => item}
          data={[]}
          renderItem={() => (
            <Text style={{ padding: 40, backgroundColor: "#f00" }}>ITEM</Text>
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
}
