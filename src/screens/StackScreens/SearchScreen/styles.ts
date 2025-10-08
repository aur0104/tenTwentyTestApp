import { AppColors } from "@config/appColor";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  searchContainer: {
    flex: 1,
  },
  searchInput: {
    backgroundColor: AppColors.lightGray,
    borderRadius: 10,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    // paddingTop: 10,
  },
  categoryCard: {
    width: (width - 55) / 2,
    height: 140,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 5,
    justifyContent: "flex-end",
  },

  categoryOverlay: {
    marginBottom: 20,
    marginLeft: 10,
  },
  categoryTitle: {
    color: AppColors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  resultsContainer: {
    flex: 1,
    paddingTop: 10,
  },
  resultsHeader: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGray,
  },
  resultsTitle: {
    color: AppColors.darkPurple,
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultsContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  searchResultItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGray,
  },
  resultImage: {
    width: 60,
    height: 90,
    borderRadius: 8,
    marginRight: 15,
  },
  resultInfo: {
    flex: 1,
  },
  resultTitle: {
    color: AppColors.darkPurple,
    marginBottom: 5,
    fontSize: 16,
  },
  resultGenre: {
    color: AppColors.gray,
    fontSize: 14,
  },
  moreButton: {
    padding: 10,
  },
});

export default styles;
