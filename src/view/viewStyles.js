import { StyleSheet } from "react-native";

const prim_col = "#666";
const sec_col = "#888";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: prim_col,
    alignItems: "center",
    justifyContent: "center"
  },
  tabBar: {
    paddingBottom: 5,
    backgroundColor: sec_col
  },
  header: {
    backgroundColor: sec_col
  }
});

export default styles;
