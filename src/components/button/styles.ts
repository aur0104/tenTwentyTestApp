import { AppColors } from "@config/appColor";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  commonStyle: {
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
  },
});
export const innerStyles = {
  background: StyleSheet.create({
    // BUTTON STYLE
    PRIMARY: {
      backgroundColor: AppColors.blue,
      alignItems: "center",
      justifyContent: "center",
    },

    OUTLINE: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: AppColors.blue,
      alignItems: "center",
      justifyContent: "center",
    },

    // BUTTON SIZE
    L: {
      paddingVertical: 17.5,
      borderRadius: 12,
    },
    S: {
      paddingVertical: 8,
      borderRadius: 8,
    },
  }),
  text: StyleSheet.create({
    // BUTTON TEXT
    PRIMARY: {
      color: AppColors.white,
      textAlign: "center",
    },
    OUTLINE: {
      color: AppColors.white,
      textAlign: "center",
    },
  }),
};
