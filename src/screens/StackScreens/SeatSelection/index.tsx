import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import Typography from "@components/typoGraphy";
import Header from "@components/header";
import {
  RegularSeat,
  VipSeat,
  FullfilledSeat,
  NotAvailableSeat,
} from "@assets/images";
import { AppColors } from "@config/appColor";
import styles from "./styles";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface DateItem {
  id: string;
  date: number;
  month: string;
  isSelected: boolean;
}

interface ShowTime {
  id: string;
  time: string;
  hall: string;
  price: {
    from: number;
    to: number;
  };
  bonus?: number;
  isSelected: boolean;
}

interface Seat {
  id: string;
  row: string;
  number: number;
  type: "regular" | "vip" | "selected" | "unavailable";
  price: number;
}

interface SeatSelectionScreenProps {
  navigation: any;
  route: {
    params?: {
      movieId?: string;
      movieData?: any;
    };
  };
}

export default function SeatSelectionScreen({
  navigation,
  route,
}: SeatSelectionScreenProps) {
  const { movieData } = route.params || {};

  const [selectedDate, setSelectedDate] = useState<string>("5");
  const [selectedShowtime, setSelectedShowtime] = useState<string>("");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showSeatMap, setShowSeatMap] = useState<boolean>(false);

  const dates: DateItem[] = [
    { id: "5", date: 5, month: "Mar", isSelected: false },
    { id: "6", date: 6, month: "Mar", isSelected: false },
    { id: "7", date: 7, month: "Mar", isSelected: false },
    { id: "8", date: 8, month: "Mar", isSelected: false },
    { id: "9", date: 9, month: "Mar", isSelected: false },
  ];

  const showtimes: ShowTime[] = [
    {
      id: "1",
      time: "12:30",
      hall: "Cinetech + Hall 1",
      price: { from: 50, to: 250 },
      bonus: 2500,
      isSelected: false,
    },
    {
      id: "2",
      time: "13:30",
      hall: "Cinetech",
      price: { from: 75, to: 300 },
      isSelected: false,
    },
  ];

  const generateSeats = (): Seat[] => {
    const seats: Seat[] = [];
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const seatsPerRow = 14;

    rows.forEach((row, rowIndex) => {
      for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
        const random = Math.random();
        let type: Seat["type"] = "regular";
        let price = 50;

        if (rowIndex < 2) {
          type = "vip";
          price = 150;
        } else if (random < 0.1) {
          type = "unavailable";
          price = 0;
        }

        seats.push({
          id: `${row}${seatNumber}`,
          row,
          number: seatNumber,
          type,
          price,
        });
      }
    });

    return seats;
  };

  const seats = generateSeats();

  const handleDateSelection = (dateId: string) => {
    setSelectedDate(dateId);
  };

  const handleShowtimeSelection = (showtimeId: string) => {
    setSelectedShowtime(showtimeId);
  };

  const handleSeatSelection = (seatId: string) => {
    const seat = seats.find((s) => s.id === seatId);
    if (!seat || seat.type === "unavailable") return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleSelectSeats = () => {
    setShowSeatMap(true);
  };

  const handleBackPress = () => {
    if (showSeatMap) {
      setShowSeatMap(false);
    } else {
      navigation.goBack();
    }
  };

  const handleProceedToPay = () => {
    const selectedSeatData = selectedSeats
      .map((seatId) => seats.find((seat) => seat.id === seatId))
      .filter(Boolean);

    const totalPrice = selectedSeatData.reduce(
      (total, seat) => total + (seat?.price || 0),
      0
    );

    navigation.navigate("BookingConfirmation", {
      bookingData: {
        movie: movieData || { title: "The King's Man" },
        selectedDate: dates.find((d) => d.id === selectedDate),
        selectedShowtime: showtimes.find((s) => s.id === selectedShowtime),
        selectedSeats: selectedSeatData,
        totalPrice,
        bookingReference: `TKM${Date.now()}`,
        bookingDate: new Date().toLocaleDateString(),
      },
    });
  };

  const calculateTotalPrice = () => {
    return selectedSeats.reduce((total, seatId) => {
      const seat = seats.find((s) => s.id === seatId);
      return total + (seat?.price || 0);
    }, 0);
  };

  const renderMiniSeatMap = () => {
    const rows = 8;
    const seatsPerRow = 14;

    return (
      <View style={styles.miniSeatMapContainer}>
        {Array.from({ length: rows }, (_, rowIndex) => (
          <View key={rowIndex} style={styles.miniSeatRow}>
            {Array.from({ length: seatsPerRow }, (_, seatIndex) => {
              const seatType = Math.random();
              let seatColor = AppColors.blue;
              if (seatType < 0.1) seatColor = AppColors.gray;
              if (seatType > 0.8) seatColor = AppColors.purple;
              if (seatType > 0.9) seatColor = AppColors.yellow;

              const isMiddleGap = seatIndex === 6 || seatIndex === 7;

              return (
                <View
                  key={seatIndex}
                  style={[
                    styles.miniSeat,
                    { backgroundColor: seatColor },
                    isMiddleGap && { marginHorizontal: 3 },
                  ]}
                />
              );
            })}
          </View>
        ))}
      </View>
    );
  };

  const renderSeat = (seat: Seat) => {
    const isSelected = selectedSeats.includes(seat.id);
    let SeatComponent = RegularSeat;

    if (isSelected) {
      SeatComponent = FullfilledSeat;
    } else {
      switch (seat.type) {
        case "vip":
          SeatComponent = VipSeat;
          break;
        case "unavailable":
          SeatComponent = NotAvailableSeat;
          break;
        default:
          SeatComponent = RegularSeat;
      }
    }

    return (
      <TouchableOpacity
        key={seat.id}
        style={styles.seatContainer}
        onPress={() => handleSeatSelection(seat.id)}
        disabled={seat.type === "unavailable"}
      >
        <SeatComponent width={20} height={20} />
      </TouchableOpacity>
    );
  };

  const groupSeatsByRow = () => {
    const grouped: { [key: string]: Seat[] } = {};
    seats.forEach((seat) => {
      if (!grouped[seat.row]) {
        grouped[seat.row] = [];
      }
      grouped[seat.row].push(seat);
    });
    return grouped;
  };

  const seatsByRow = groupSeatsByRow();

  if (showSeatMap) {
    return (
      <View style={styles.container}>
        <Header
          title={movieData?.title || "The King's Man"}
          subtitle="March 5, 2021 | 12:30 Hall 1"
          onLeftPress={handleBackPress}
          showRightIcon={false}
        />

        <View style={styles.screenIndicator}>
          <Typography type="TWELVEREGULAR" style={styles.screenText}>
            SCREEN
          </Typography>
          <View style={styles.screenLine} />
        </View>

        <ScrollView
          style={styles.seatMapContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.seatMapContent}
        >
          {Object.keys(seatsByRow).map((row) => (
            <View key={row} style={styles.seatRow}>
              <Typography type="TWELVEREGULAR" style={styles.rowLabel}>
                {row}
              </Typography>
              <View style={styles.seatsInRow}>
                {seatsByRow[row].map(renderSeat)}
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.zoomControls}>
          <TouchableOpacity style={styles.zoomButton}>
            <Typography type="SIXTEENBOLD" style={styles.zoomButtonText}>
              +
            </Typography>
          </TouchableOpacity>

          <TouchableOpacity style={styles.zoomButton}>
            <Typography type="SIXTEENBOLD" style={styles.zoomButtonText}>
              -
            </Typography>
          </TouchableOpacity>
        </View>

        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <FullfilledSeat width={16} height={16} />
            <Typography type="THIRTEENREGULAR" style={styles.legendText}>
              Selected
            </Typography>
          </View>
          <View style={styles.legendItem}>
            <NotAvailableSeat width={16} height={16} />
            <Typography type="THIRTEENREGULAR" style={styles.legendText}>
              Not available
            </Typography>
          </View>
          <View style={styles.legendItem}>
            <VipSeat width={16} height={16} />
            <Typography type="THIRTEENREGULAR" style={styles.legendText}>
              VIP (150$)
            </Typography>
          </View>
          <View style={styles.legendItem}>
            <RegularSeat width={16} height={16} />
            <Typography type="THIRTEENREGULAR" style={styles.legendText}>
              Regular (50 $)
            </Typography>
          </View>
        </View>

        {selectedSeats.length > 0 && (
          <View style={styles.selectedSeatsInfo}>
            <View style={styles.selectedSeatsCount}>
              <Typography type="FOURTEENBOLD" style={styles.selectedCount}>
                {selectedSeats.length.toString()} / 3 row
              </Typography>
              <TouchableOpacity onPress={() => setSelectedSeats([])}>
                <Typography type="FOURTEENBOLD" style={styles.clearSelection}>
                  ×
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.bottomContainer}>
          <View style={styles.totalPriceContainer}>
            <Typography type="THIRTEENREGULAR" style={styles.totalPriceLabel}>
              Total Price
            </Typography>
            <Typography type="SIXTEENBOLD" style={styles.totalPrice}>
              $ {calculateTotalPrice().toString()}
            </Typography>
          </View>

          <TouchableOpacity
            style={[
              styles.proceedButton,
              selectedSeats.length === 0 && styles.disabledButton,
            ]}
            onPress={handleProceedToPay}
            disabled={selectedSeats.length === 0}
          >
            <Typography type="FOURTEENBOLD" style={styles.proceedButtonText}>
              Proceed to pay
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.white} />

      <Header
        title={movieData?.title || "The King's Man"}
        subtitle="In Theaters December 22, 2021"
        onLeftPress={handleBackPress}
        showRightIcon={false}
      />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.section}>
          <Typography type="SIXTEENBOLD" style={styles.sectionTitle}>
            Date
          </Typography>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.dateScroll}
            contentContainerStyle={styles.dateContainer}
          >
            {dates.map((date) => (
              <TouchableOpacity
                key={date.id}
                style={[
                  styles.dateItem,
                  selectedDate === date.id && styles.selectedDateItem,
                ]}
                onPress={() => handleDateSelection(date.id)}
              >
                <Typography
                  type="FOURTEENBOLD"
                  style={[
                    styles.dateText,
                    selectedDate === date.id && styles.selectedDateText,
                  ]}
                >
                  {date.date.toString()} {date.month}
                </Typography>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.showtimeContainer}
          >
            {showtimes.map((showtime) => (
              <TouchableOpacity
                key={showtime.id}
                style={[styles.showtimeCard]}
                onPress={() => handleShowtimeSelection(showtime.id)}
              >
                <View style={styles.showtimeHeader}>
                  <Typography type="FOURTEENBOLD" style={styles.showtimeTime}>
                    {showtime.time}
                  </Typography>
                  <Typography
                    type="THIRTEENREGULAR"
                    style={styles.showtimeHall}
                  >
                    {showtime.hall}
                  </Typography>
                </View>

                {renderMiniSeatMap()}

                <View style={styles.priceContainer}>
                  <Typography type="THIRTEENREGULAR" style={styles.priceText}>
                    From {showtime.price.from.toString()}$ or{" "}
                    {showtime.price.to.toString()}
                    {showtime.bonus ? ` bonus` : ""}
                  </Typography>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[
            styles.selectSeatsButton,
            (!selectedDate || !selectedShowtime) && styles.disabledButton,
          ]}
          onPress={handleSelectSeats}
          disabled={!selectedDate || !selectedShowtime}
        >
          <Typography type="FOURTEENBOLD" style={styles.selectSeatsText}>
            Select Seats
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
}
