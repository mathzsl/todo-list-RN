import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Checkbox from "expo-checkbox";
import { Trash2 } from "lucide-react-native";
import { Task } from "../../screens/Home";

type ListItemProps = {
  taskItem: Task;
  onToggleChecked: (taskId: string) => void;
  onDelTask: (taskId: string, taskName: string) => void;
};

export function ListItem({
  taskItem,
  onToggleChecked,
  onDelTask,
}: ListItemProps) {
  function onDeleteTask() {
    if (!taskItem.done) {
      return Alert.alert(
        "Ops, você não pode deletar esta tarefa!",
        "Para deletar uma tarefa, você primeiro deve marcá-la como concluída."
      );
    }

    onDelTask(taskItem.id, taskItem.task);
  }

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={taskItem.done}
        color={taskItem.done ? "#5E60CE" : undefined}
        onValueChange={() => onToggleChecked(taskItem.id)}
      />
      <Text style={taskItem.done ? styles.taskNameChecked : styles.taskName}>
        {taskItem.task}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onDeleteTask}>
        <Trash2 size={16} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
