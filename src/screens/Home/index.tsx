import { View, Image, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { Form } from "../../components/Form";
import { EmptyList } from "../../components/EmptyList";
import { Counter } from "../../components/Counter";
import { ListItem } from "../../components/ListItem";
import { useState } from "react";

import uuid from "react-native-uuid";

export type Task = {
  id: string;
  done: boolean;
  task: string;
};

export function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);
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

  function handleToggleChecked(taskId: string) {
    setTaskList((prevSate) =>
      prevSate.map((task) => {
        if (task.id.includes(taskId)) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      })
    );
  }

  function handleDeleteTask(taskId: string, taskName: string) {
    Alert.alert("Deletar tarefa", `Deseja mesmo deletar a tarefa: ${taskName}`, [
      {
        text: "Deletar",
        onPress: () =>
          setTaskList((prevState) =>
            prevState.filter((task) => {
              return !task.id.includes(taskId);
            })
          ),
      },
      {
        text: "Cancelar",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={{ paddingHorizontal: 24, flex: 1 }}>
        <Form onTask={setTask} taskName={task} onAddTask={handleAddNewTask} />

        <Counter taskList={taskList} />

        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={taskList}
          renderItem={({ item }) => (
            <ListItem
              taskItem={item}
              onToggleChecked={handleToggleChecked}
              onDelTask={handleDeleteTask}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </View>
  );
}
