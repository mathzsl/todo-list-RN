import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333",
    marginBottom: 8,

    backgroundColor: "#262626",

    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  checkbox: {
    width: 17,
    height: 17,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#4EA8DE",
  },

  taskName: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#F2F2F2",
  },

  button: {
    width: 32,
    height: 32,
    borderRadius: 4,

    alignItems: "center",
    justifyContent: "center",
  },
});
