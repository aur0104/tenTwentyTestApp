import { StyleSheet } from "react-native";
import { AppColors } from "@config/appColor";
import fonts from "@config/fonts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColors.offWhite,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    padding: 4,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: AppColors.darkBlue,
    fontFamily: fonts.FONT_FAMILIES.REGULAR,
  },
});

export default styles;
