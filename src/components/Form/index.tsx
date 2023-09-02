import { TextInput, TouchableOpacity, View } from "react-native";
import { PlusCircle } from "lucide-react-native";
import { styles } from "./styles";

export type FormProps = {
  taskName: string;
  onTask: (text: string) => void;
  onAddTask: () => void;
};

export function Form({ onTask, onAddTask, taskName }: FormProps) {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onTask}
        value={taskName}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={onAddTask}>
        <PlusCircle size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
