import { StyleSheet, Dimensions } from "react-native";
import { AppColors } from "@config/appColor";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: AppColors.white,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGray,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: AppColors.darkPurple,
    flex: 1,
    textAlign: "center",
  },
  placeholder: {
    width: 34, // Same width as back button for centering
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  successContainer: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  successIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  checkMark: {
    color: AppColors.white,
    fontSize: 24,
  },
  successTitle: {
    color: AppColors.darkPurple,
    marginBottom: 8,
    fontSize: 20,
  },
  successSubtitle: {
    color: AppColors.gray,
    textAlign: "center",
  },
  movieCard: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  moviePoster: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 15,
  },
  movieInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  movieTitle: {
    color: AppColors.darkPurple,
    marginBottom: 8,
  },
  movieDetails: {
    color: AppColors.gray,
    marginBottom: 4,
  },
  trailerButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 10,
  },
  trailerText: {
    color: AppColors.blue,
    marginLeft: 5,
  },
  detailsCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  seatsCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  qrCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: AppColors.white,
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    color: AppColors.darkPurple,
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  detailLabel: {
    color: AppColors.gray,
    flex: 1,
  },
  detailValue: {
    color: AppColors.darkPurple,
    flex: 1,
    textAlign: "right",
  },
  separator: {
    height: 1,
    backgroundColor: AppColors.lightGray,
    marginVertical: 15,
  },
  totalLabel: {
    color: AppColors.darkPurple,
  },
  totalValue: {
    color: AppColors.blue,
  },
  seatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  seatInfo: {
    flex: 1,
  },
  seatNumber: {
    color: AppColors.darkPurple,
    marginBottom: 2,
  },
  seatType: {
    color: AppColors.gray,
    textTransform: "capitalize",
  },
  seatPrice: {
    color: AppColors.blue,
  },
  qrPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    backgroundColor: AppColors.lightGray,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: AppColors.gray,
  },
  qrText: {
    color: AppColors.gray,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  qrSubtext: {
    color: AppColors.gray,
    textAlign: "center",
  },
  bottomActions: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: AppColors.white,
    borderTopWidth: 1,
    borderTopColor: AppColors.lightGray,
    gap: 12,
  },
  downloadButton: {
    flex: 1,
    backgroundColor: AppColors.offWhite,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: AppColors.blue,
  },
  downloadButtonText: {
    color: AppColors.blue,
  },
  doneButton: {
    flex: 1,
    backgroundColor: AppColors.blue,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
  },
  doneButtonText: {
    color: AppColors.white,
  },
});

export default styles;
