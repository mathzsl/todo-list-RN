import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: -27,

    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  input: {
    flex: 1,
    height: 54,
    padding: 16,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    color: "#F2F2F2",
    backgroundColor: "#262626",
  },

  button: {
    width: 52,
    height: 52,
    borderRadius: 6,

    backgroundColor: "#1E6F9F",

    alignItems: "center",
    justifyContent: "center",
  },
});
