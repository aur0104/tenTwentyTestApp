import { AppColors } from "@config/appColor";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  topContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: AppColors.white,
    paddingHorizontal: "8%",
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  movieCard: {
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: AppColors.white,
    shadowColor: AppColors.darkBlue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  posterImage: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },
  movieOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  movieInfo: {
    padding: 12,
  },
  movieTitle: {
    color: AppColors.white,
    marginBottom: 4,
    fontSize: 18,
    fontWeight: "600",
  },
  releaseDate: {
    color: AppColors.gray,
    fontSize: 12,
  },
  loadingFooter: {
    paddingVertical: 20,
    alignItems: "center",
  },
});

export default styles;
