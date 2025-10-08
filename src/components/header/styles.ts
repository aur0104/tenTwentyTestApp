import { StyleSheet } from "react-native";
import { AppColors } from "@config/appColor";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "transparent",
    width: "90%",
    alignSelf: "center",
  },
  leftSection: {
    flex: 1,
    alignItems: "flex-start",
  },
  centerSection: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  rightSection: {
    flex: 1,
    alignItems: "flex-end",
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: AppColors.darkBlue,
    marginBottom: 4,
  },
  subtitle: {
    color: AppColors.blue,
    fontSize: 12,
  },
});

export default styles;
