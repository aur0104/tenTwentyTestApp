import { StyleSheet, Dimensions } from "react-native";
import { AppColors } from "@config/appColor";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: AppColors.darkPurple,
    marginBottom: 15,
  },
  dateScroll: {
    marginBottom: 20,
  },
  dateContainer: {
    paddingRight: 20,
  },
  dateItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: AppColors.lightGray,
    marginRight: 10,
    minWidth: 80,
    alignItems: "center",
  },
  selectedDateItem: {
    backgroundColor: AppColors.blue,
  },
  dateText: {
    color: AppColors.gray,
  },
  selectedDateText: {
    color: AppColors.white,
  },
  showtimeContainer: {
    paddingRight: 20,
  },
  showtimeCard: {
    // backgroundColor: AppColors.lightGray,
    // borderRadius: 12,
    padding: 15,
    marginRight: 15,
    // borderWidth: 2,
    borderColor: "transparent",
    width: SCREEN_WIDTH * 0.75,
    minHeight: 200,
  },
  selectedShowtimeCard: {
    borderColor: AppColors.blue,
  },
  showtimeHeader: {
    flexDirection: "row",
    gap: 9,
    alignItems: "center",
  },
  showtimeTime: {
    color: AppColors.darkPurple,
  },
  showtimeHall: {
    color: AppColors.gray,
  },
  miniSeatMapContainer: {
    backgroundColor: AppColors.white,
    borderRadius: 8,
    marginBottom: 10,
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: AppColors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  miniSeatRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 3,
  },
  miniSeat: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 1.5,
  },
  miniSeatIcon: {
    marginHorizontal: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  priceContainer: {
    alignItems: "flex-start",
  },
  priceText: {
    color: AppColors.gray,
  },
  bottomContainer: {
    paddingHorizontal: "9%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: AppColors.white,
  },

  disabledButton: {
    backgroundColor: AppColors.gray,
  },
  selectSeatsText: {
    color: AppColors.white,
  },

  // Seat Map Styles
  screenIndicator: {
    alignItems: "center",
    paddingVertical: 20,
  },
  screenText: {
    color: AppColors.gray,
    marginBottom: 10,
  },
  screenLine: {
    width: SCREEN_WIDTH * 0.6,
    height: 3,
    backgroundColor: AppColors.blue,
    borderRadius: 2,
  },
  seatMapContainer: {
    flex: 1,
  },
  seatMapContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  seatRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  rowLabel: {
    width: 20,
    color: AppColors.gray,
    textAlign: "center",
    marginRight: 10,
  },
  seatsInRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  seatContainer: {
    margin: 2,
  },
  zoomControls: {
    position: "absolute",
    right: 20,
    top: SCREEN_HEIGHT * 0.5,
    flexDirection: "column",
  },
  zoomButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: AppColors.white,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  zoomButtonText: {
    color: AppColors.darkPurple,
  },
  legend: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "10%",
    width: "80%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  legendItem: {
    alignItems: "center",
    gap: 12,
    flexDirection: "row",
  },
  legendText: {
    color: AppColors.gray,
    marginTop: 5,
    fontSize: 10,
  },
  selectedSeatsInfo: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedSeatsCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedCount: {
    color: AppColors.darkPurple,
  },
  clearSelection: {
    color: AppColors.gray,
    fontSize: 20,
  },
  totalPriceContainer: {
    width: "30%",
    backgroundColor: "#A6A6A61A",
    paddingVertical: 4,
    // paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  totalPriceLabel: {
    color: AppColors.gray,
    marginBottom: 5,
  },
  totalPrice: {
    color: AppColors.darkPurple,
  },
  proceedButton: {
    backgroundColor: AppColors.blue,
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 15,
    flex: 1,
    alignItems: "center",
  },
  proceedButtonText: {
    color: AppColors.white,
  },
});

export default styles;
