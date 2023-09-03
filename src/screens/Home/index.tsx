import { View, Image, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { Form } from "../../components/Form";
import { EmptyList } from "../../components/EmptyList";
import { Counter } from "../../components/Counter";
import { ListItem } from "../../components/ListItem";
import { useState, useEffect } from "react";

import uuid from "react-native-uuid";
import { getSavedTask, saveTasks } from "../../components/services/storeTasks";

export type Task = {
  id: string;
  done: boolean;
  task: string;
};

export function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    async function loadTasks() {
      const tasks = await getSavedTask("@TaskList");
      setTaskList(tasks);
    }
    loadTasks();
  }, []);

  function handleAddNewTask() {
    if (!task.trim()) {
      return Alert.alert("Ops!", "Você precisa adicionar o nome da tarefa.");
    }

    const newTask = [
      ...taskList,
      {
        id: String(uuid.v4()),
        done: false,
        task: task,
      },
    ];

    setTaskList(newTask);
    saveTasks("@TaskList", newTask);
    setTask("");
  }

  function deleteTask(taskId: string) {
    const delTask = taskList.filter((task) => {
      return !task.id.includes(taskId);
    });

    setTaskList(delTask);
    saveTasks("@TaskList", delTask);
  }

  function handleToggleChecked(taskId: string) {
    const newTask = taskList.map((task) => {
      if (task.id.includes(taskId)) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    setTaskList(newTask);
    saveTasks("@TaskList", newTask);
  }

  function handleDeleteTask(taskId: string, taskName: string) {
    Alert.alert(
      "Deletar tarefa",
      `Deseja mesmo deletar a tarefa: ${taskName}?`,
      [
        {
          text: "Deletar",
          onPress: () => deleteTask(taskId),
        },
        {
          text: "Cancelar",
        },
      ]
    );
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
          style={{ marginBottom: 20 }}
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
