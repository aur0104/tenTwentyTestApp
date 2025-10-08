import { StyleSheet, Dimensions } from "react-native";
import { AppColors } from "@config/appColor";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "transparent",
  },
  doneButton: {
    alignSelf: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  doneText: {
    color: AppColors.white,
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  video: {
    width: width,
    height: height,
    backgroundColor: "black",
  },
  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    color: AppColors.white,
    marginTop: 10,
    textAlign: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: AppColors.white,
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: AppColors.blue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryText: {
    color: AppColors.white,
  },
});

export default styles;
