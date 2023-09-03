import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../../screens/Home";

export async function getSavedTask(key: string) {
  const myTasks = await AsyncStorage.getItem(key);
  const savedTasks: Task[] | [] = JSON.parse(myTasks!) ?? [];
  return savedTasks;
}

export async function saveTasks(key: string, taskList: Task[]) {
  await AsyncStorage.setItem(key, JSON.stringify(taskList));
}
