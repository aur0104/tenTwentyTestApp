import { AppColors } from "@config/appColor";
import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.white,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: AppColors.darkPurple,
    textAlign: "center",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: AppColors.blue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: AppColors.white,
  },
  scrollContainer: {
    flex: 1,
  },
  posterSection: {
    height: height * 0.6,
    width: "100%",
  },
  posterOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 20,
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  backIcon: {
    marginRight: 15,
    padding: 5,
  },
  backIconText: {
    color: AppColors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  headerTitle: {
    color: AppColors.white,
    flex: 1,
    textAlign: "center",
    marginRight: 40, // To center the title considering the back button
  },
  moviePosterContainer: {
    alignItems: "center",
    marginVertical: 10,
    flex: 1,
    justifyContent: "center",
  },
  moviePoster: {
    width: 180,
    height: 270,
    borderRadius: 10,
  },
  movieTitleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  movieTitle: {
    color: AppColors.white,
    textAlign: "center",
    marginBottom: 8,
  },
  releaseDate: {
    color: AppColors.white,
    textAlign: "center",
    opacity: 0.8,
  },
  actionButtonsContainer: {
    paddingHorizontal: 0,
    marginBottom: 0,
    width: "100%",
    gap: 10,
  },

  getTicketsText: {
    color: AppColors.white,
  },
  watchTrailerButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: AppColors.white,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  watchTrailerText: {
    color: AppColors.white,
  },
  contentSection: {
    padding: 20,
    backgroundColor: AppColors.white,
  },
  genresSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: AppColors.darkPurple,
    marginBottom: 15,
  },
  genresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  genreTag: {
    backgroundColor: AppColors.teal,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  genreText: {
    color: AppColors.white,
  },
  overviewSection: {
    marginBottom: 20,
  },
  overviewText: {
    color: AppColors.gray,
    lineHeight: 22,
    textAlign: "justify",
  },
  getTicketsButton: {
    width: "62%",
    alignSelf: "center",
  },
});

export default styles;
