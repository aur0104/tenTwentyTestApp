import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import Typography from "@components/typoGraphy";
import { BackIcon, PlayIcon } from "@assets/images";
import { AppColors } from "@config/appColor";
import { URLS } from "@api/client";
import styles from "./styles";

interface BookingData {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    genres: string[];
    runtime: number;
  };
  selectedDate: {
    date: number;
    month: string;
    year: string;
  };
  selectedShowtime: {
    time: string;
    hall: string;
  };
  selectedSeats: Array<{
    id: string;
    row: string;
    number: number;
    type: string;
    price: number;
  }>;
  totalPrice: number;
  bookingReference: string;
  bookingDate: string;
}

interface BookingConfirmationScreenProps {
  navigation: any;
  route: {
    params?: {
      bookingData?: BookingData;
    };
  };
}

export default function BookingConfirmationScreen({
  navigation,
  route,
}: BookingConfirmationScreenProps) {
  const defaultBookingData: BookingData = {
    movie: {
      id: 1,
      title: "The King's Man",
      poster_path: "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
      release_date: "2021-12-22",
      genres: ["Action", "Adventure", "Comedy"],
      runtime: 131,
    },
    selectedDate: {
      date: 5,
      month: "Mar",
      year: "2021",
    },
    selectedShowtime: {
      time: "12:30",
      hall: "Cinetech + Hall 1",
    },
    selectedSeats: [
      { id: "D7", row: "D", number: 7, type: "regular", price: 50 },
      { id: "D8", row: "D", number: 8, type: "regular", price: 50 },
      { id: "D9", row: "D", number: 9, type: "vip", price: 150 },
    ],
    totalPrice: 250,
    bookingReference: "TKM240305001",
    bookingDate: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  const bookingData = route.params?.bookingData || defaultBookingData;

  const handleDownloadTicket = () => {
    console.log("Downloading ticket...");
  };

  const handleWatchTrailer = () => {
    navigation.navigate("VideoPlayer", {
      movieId: bookingData.movie.id,
    });
  };

  const handleBackToDashboard = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "TabNavigator" }],
    });
  };

  const formatSeatNumbers = () => {
    return bookingData.selectedSeats
      .map((seat) => `${seat.row}${seat.number}`)
      .join(", ");
  };

  const formatMovieDuration = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.white} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackToDashboard}
        >
          <BackIcon color={AppColors.darkPurple} width={24} height={24} />
        </TouchableOpacity>
        <Typography type="SIXTEENBOLD" style={styles.headerTitle}>
          Booking Summary
        </Typography>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.successContainer}>
          <View style={styles.successIcon}>
            <Typography type="SIXTEENBOLD" style={styles.checkMark}>
              ✓
            </Typography>
          </View>
          <Typography type="SIXTEENBOLD" style={styles.successTitle}>
            Booking Confirmed!
          </Typography>
          <Typography type="FOURTEENREGULAR" style={styles.successSubtitle}>
            Your tickets have been booked successfully
          </Typography>
        </View>

        {/* Movie Card */}
        <View style={styles.movieCard}>
          <Image
            source={{
              uri: bookingData.movie.poster_path
                ? `${URLS.imageBaseUrl}${bookingData.movie.poster_path}`
                : "https://via.placeholder.com/120x180?text=No+Image",
            }}
            style={styles.moviePoster}
          />
          <View style={styles.movieInfo}>
            <Typography type="SIXTEENBOLD" style={styles.movieTitle}>
              {bookingData.movie.title}
            </Typography>
            <Typography type="THIRTEENREGULAR" style={styles.movieDetails}>
              {bookingData.movie.genres.join(" • ")}
            </Typography>
            <Typography type="THIRTEENREGULAR" style={styles.movieDetails}>
              {formatMovieDuration(bookingData.movie.runtime)}
            </Typography>

            <TouchableOpacity
              style={styles.trailerButton}
              onPress={handleWatchTrailer}
            >
              <PlayIcon color={AppColors.blue} width={16} height={16} />
              <Typography type="THIRTEENBOLD" style={styles.trailerText}>
                Watch Trailer
              </Typography>
            </TouchableOpacity>
          </View>
        </View>

        {/* Booking Details */}
        <View style={styles.detailsCard}>
          <Typography type="SIXTEENBOLD" style={styles.sectionTitle}>
            Booking Details
          </Typography>

          <View style={styles.detailRow}>
            <Typography type="FOURTEENREGULAR" style={styles.detailLabel}>
              Booking Reference
            </Typography>
            <Typography type="FOURTEENBOLD" style={styles.detailValue}>
              {bookingData.bookingReference}
            </Typography>
          </View>

          <View style={styles.detailRow}>
            <Typography type="FOURTEENREGULAR" style={styles.detailLabel}>
              Date & Time
            </Typography>
            <Typography type="FOURTEENBOLD" style={styles.detailValue}>
              {bookingData.selectedDate.date.toString()}{" "}
              {bookingData.selectedDate.month} {bookingData.selectedDate.year},{" "}
              {bookingData.selectedShowtime.time}
            </Typography>
          </View>

          <View style={styles.detailRow}>
            <Typography type="FOURTEENREGULAR" style={styles.detailLabel}>
              Cinema
            </Typography>
            <Typography type="FOURTEENBOLD" style={styles.detailValue}>
              {bookingData.selectedShowtime.hall}
            </Typography>
          </View>

          <View style={styles.detailRow}>
            <Typography type="FOURTEENREGULAR" style={styles.detailLabel}>
              Seats
            </Typography>
            <Typography type="FOURTEENBOLD" style={styles.detailValue}>
              {formatSeatNumbers()}
            </Typography>
          </View>

          <View style={styles.detailRow}>
            <Typography type="FOURTEENREGULAR" style={styles.detailLabel}>
              Number of Tickets
            </Typography>
            <Typography type="FOURTEENBOLD" style={styles.detailValue}>
              {bookingData.selectedSeats.length.toString()}
            </Typography>
          </View>

          <View style={styles.separator} />

          <View style={styles.detailRow}>
            <Typography type="SIXTEENBOLD" style={styles.totalLabel}>
              Total Amount
            </Typography>
            <Typography type="SIXTEENBOLD" style={styles.totalValue}>
              ${bookingData.totalPrice.toString()}
            </Typography>
          </View>
        </View>

        {/* Seat Breakdown */}
        <View style={styles.seatsCard}>
          <Typography type="SIXTEENBOLD" style={styles.sectionTitle}>
            Seat Details
          </Typography>

          {bookingData.selectedSeats.map((seat, index) => (
            <View key={seat.id} style={styles.seatRow}>
              <View style={styles.seatInfo}>
                <Typography type="FOURTEENBOLD" style={styles.seatNumber}>
                  {seat.row}
                  {seat.number.toString()}
                </Typography>
                <Typography type="THIRTEENREGULAR" style={styles.seatType}>
                  {seat.type === "vip" ? "VIP" : "Regular"}
                </Typography>
              </View>
              <Typography type="FOURTEENBOLD" style={styles.seatPrice}>
                ${seat.price.toString()}
              </Typography>
            </View>
          ))}
        </View>

        {/* QR Code Placeholder */}
        <View style={styles.qrCard}>
          <Typography type="SIXTEENBOLD" style={styles.sectionTitle}>
            Your Ticket
          </Typography>
          <View style={styles.qrPlaceholder}>
            <Typography type="FOURTEENREGULAR" style={styles.qrText}>
              QR CODE
            </Typography>
            <Typography type="TWELVEREGULAR" style={styles.qrSubtext}>
              Show this code at the cinema
            </Typography>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={handleDownloadTicket}
        >
          <Typography type="FOURTEENBOLD" style={styles.downloadButtonText}>
            Download Ticket
          </Typography>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.doneButton}
          onPress={handleBackToDashboard}
        >
          <Typography type="FOURTEENBOLD" style={styles.doneButtonText}>
            Done
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
}
