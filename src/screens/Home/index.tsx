import { View, Image, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { Form } from "../../components/Form";
import { EmptyList } from "../../components/EmptyList";
import { Counter } from "../../components/Counter";
import { ListItem } from "../../components/ListItem";
import { useState } from "react";

import uuid from "react-native-uuid";

type TaskList = {
  id: string;
  done: boolean;
  task: string;
};

export function Home() {
  const [taskList, setTaskList] = useState<TaskList[]>([]);
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    if (!task.trim()) {
      return Alert.alert("Ops!", "Você precisa adicionar o nome da tarefa.");
    }

    setTaskList((prevState) => [
      ...prevState,
      {
        id: String(uuid.v4()),
        done: false,
        task: task,
      },
    ]);
    setTask("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={{ paddingHorizontal: 24 }}>
        <Form onTask={setTask} taskName={task} onAddTask={handleAddNewTask} />

        <Counter />

        <FlatList
          keyExtractor={(item) => item.id}
          data={taskList}
          renderItem={({ item }) => (
            <ListItem task={item.task} isChecked={item.done} />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
}
