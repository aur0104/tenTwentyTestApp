import React, { useState, useEffect } from "react";
import {
  Alert,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { getMovieDetails, getMovieVideos } from "@api/index";
import { URLS } from "@api/client";
import Typography from "@components/typoGraphy";
import VideoPlayerModal from "@components/VideoPlayerModal";
import { AppColors } from "@config/appColor";
import { CustomButton } from "@components/index";

interface Genre {
  id: number;
  name: string;
}

interface MovieDetail {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  runtime: number;
  genres: Genre[];
  status: string;
}

interface VideoResult {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}

export default function MovieDetailsScreen({ navigation, route }: any) {
  const { movieId } = route.params;
  const [movieData, setMovieData] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState<string>("");

  const getMovieDetailsFromBackEnd = async () => {
    try {
      if (!movieId) {
        Alert.alert("Error", "Movie ID is missing");
        navigation.goBack();
        return;
      }
      setLoading(true);
      const response = await getMovieDetails(movieId);
      const data: MovieDetail = response.data;
      setMovieData(data);
    } catch (error) {
      console.log("Error fetching movie details:", error);
      Alert.alert("Error", "Failed to fetch movie details");
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetailsFromBackEnd();
  }, []);

  const formatReleaseDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleGetTickets = () => {
    // Navigate to seat selection or booking flow
    navigation.navigate("SeatSelection", {
      movieId,
      showTime: "8:00 PM",
      date: new Date().toISOString(),
    });
  };

  const handleWatchTrailer = async () => {
    try {
      setLoading(true);
      const response = await getMovieVideos(movieId);
      const videos: VideoResult[] = response.data.results;
      // Find the first official trailer
      const trailer =
        videos.find(
          (video) =>
            video.type === "Trailer" &&
            video.site === "YouTube" &&
            video.official === true
        ) ||
        videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

      if (trailer) {
        const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
        console.log("Trailer URL:", youtubeUrl);
        setTrailerUrl(youtubeUrl);
        setShowVideoPlayer(true);
      } else {
        Alert.alert("No Trailer", "No trailer available for this movie.");
      }
    } catch (error) {
      console.log("Error fetching trailer:", error);
      Alert.alert("Error", "Failed to load trailer. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
    setTrailerUrl("");
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={AppColors.blue} />
        </View>
      </View>
    );
  }

  if (!movieData) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Typography type="SIXTEENMEDIUM" style={styles.errorText}>
            Movie not found
          </Typography>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Typography type="FOURTEENMEDIUM" style={styles.backButtonText}>
              Go Back
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.posterSection}
        source={{
          uri: `${URLS.imageBaseUrl}${
            movieData.backdrop_path || movieData.poster_path
          }`,
        }}
        resizeMode="cover"
      >
        <View style={styles.posterOverlay}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => navigation.goBack()}
            >
              <Typography type="SIXTEENREGULAR" style={styles.backIconText}>
                ←
              </Typography>
            </TouchableOpacity>
            <Typography type="SIXTEENMEDIUM" style={styles.headerTitle}>
              Watch
            </Typography>
          </View>

          <View style={styles.moviePosterContainer}>
            <Image
              source={{
                uri: `${URLS.imageBaseUrl}${movieData.poster_path}`,
              }}
              style={styles.moviePoster}
              resizeMode="cover"
            />
          </View>

          <View style={styles.movieTitleContainer}>
            <Typography type="SIXTEENBOLD" style={styles.movieTitle}>
              {movieData.title}
            </Typography>
            <Typography type="FOURTEENREGULAR" style={styles.releaseDate}>
              In Theaters {formatReleaseDate(movieData.release_date)}
            </Typography>
          </View>

          <View style={styles.actionButtonsContainer}>
            <CustomButton
              type={"PRIMARY"}
              onPress={handleGetTickets}
              style={styles.getTicketsButton}
              typographyProps={{
                type: "FOURTEENBOLD",
                style: { color: AppColors.white },
              }}
            >
              Get Tickets
            </CustomButton>
            <CustomButton
              type={"OUTLINE"}
              onPress={handleWatchTrailer}
              style={styles.getTicketsButton}
              typographyProps={{
                type: "FOURTEENBOLD",
                style: { color: AppColors.white },
              }}
            >
              ▶ Watch Trailer
            </CustomButton>
          </View>
        </View>
      </ImageBackground>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentSection}>
          <View style={styles.genresSection}>
            <Typography type="SIXTEENBOLD" style={styles.sectionTitle}>
              Genres
            </Typography>
            <View style={styles.genresContainer}>
              {movieData.genres.map((genre, index) => (
                <View key={genre.id} style={styles.genreTag}>
                  <Typography type="TWELVEREGULAR" style={styles.genreText}>
                    {genre.name}
                  </Typography>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.overviewSection}>
            <Typography type="SIXTEENBOLD" style={styles.sectionTitle}>
              Overview
            </Typography>
            <Typography type="FOURTEENREGULAR" style={styles.overviewText}>
              {movieData?.overview}
            </Typography>
          </View>
        </View>
      </ScrollView>
      <VideoPlayerModal
        visible={showVideoPlayer}
        videoUrl={trailerUrl}
        onClose={handleCloseVideoPlayer}
        onError={(error) => {
          console.log("Video Player Error:", error);
          setShowVideoPlayer(false);
        }}
      />
    </View>
  );
}
