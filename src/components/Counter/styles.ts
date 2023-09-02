import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 32,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  countInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },

  count: {
    width: 25,
    height: 19,
    borderRadius: 9999,
    backgroundColor: "#333333",

    alignItems: "center",
    justifyContent: "center",
  },
});
