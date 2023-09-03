import { Text, View } from "react-native";
import { styles } from "./styles";
import { Task } from "../../screens/Home";

type CounterProps = {
  taskList: Task[];
};

export function Counter({ taskList }: CounterProps) {
  const tasksCount = taskList.length;

  const completedTasks = taskList.filter((task) => {
    return task.done;
  }).length;

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
            {tasksCount}
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
            {completedTasks}
          </Text>
        </View>
      </View>
    </View>
  );
}
