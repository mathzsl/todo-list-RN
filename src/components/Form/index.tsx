import { TextInput, TouchableOpacity, View } from "react-native";
import { PlusCircle } from "lucide-react-native";
import { styles } from "./styles";

export function Form() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <PlusCircle size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
