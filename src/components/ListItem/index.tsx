import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Checkbox from "expo-checkbox";
import { Trash2 } from "lucide-react-native";

export function ListItem() {
  const isChecked = true;

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        color={isChecked ? "#5E60CE" : undefined}
      />
      <Text style={styles.taskName}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Trash2 size={16} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
