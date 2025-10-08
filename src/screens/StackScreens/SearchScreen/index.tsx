import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
  ImageBackground,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import styles from "./styles";
import InputField from "@components/inputField";
import Typography from "@components/typoGraphy";
import { ThreeDots, BackIcon } from "@assets/images";
import { searchMovies } from "@api";
import { URLS } from "@api/client";
import { AppColors } from "@config/appColor";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

interface SearchResult {
  results: Movie[];
  total_pages: number;
  page: number;
  total_results: number;
}

// Category data with PNG images
const categories = [
  {
    id: 1,
    title: "Comedies",
    color: AppColors.pink,
    image: require("@assets/images/pngs/Rectangle 2235.png"),
  },
  {
    id: 2,
    title: "Crime",
    color: AppColors.darkPurple,
    image: require("@assets/images/pngs/Rectangle 2236 (1).png"),
  },
  {
    id: 3,
    title: "Family",
    color: AppColors.blue,
    image: require("@assets/images/pngs/Rectangle 2237.png"),
  },
  {
    id: 4,
    title: "Documentaries",
    color: AppColors.yellow,
    image: require("@assets/images/pngs/Rectangle 2238.png"),
  },
  {
    id: 5,
    title: "Dramas",
    color: AppColors.purple,
    image: require("@assets/images/pngs/Rectangle 2239.png"),
  },
  {
    id: 6,
    title: "Fantasy",
    color: AppColors.teal,
    image: require("@assets/images/pngs/Rectangle 2240.png"),
  },
  {
    id: 7,
    title: "Holidays",
    color: AppColors.pink,
    image: require("@assets/images/pngs/Rectangle 2241.png"),
  },
  {
    id: 8,
    title: "Horror",
    color: AppColors.darkPurple,
    image: require("@assets/images/pngs/Rectangle 2242.png"),
  },
  {
    id: 9,
    title: "Sci-Fi",
    color: AppColors.blue,
    image: require("@assets/images/pngs/Rectangle 2243.png"),
  },
  {
    id: 10,
    title: "Thriller",
    color: AppColors.darkBlue,
    image: require("@assets/images/pngs/Rectangle 2244.png"),
  },
];

export default function SearchMovieScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async () => {
    if (searchQuery.trim().length === 0) {
      Alert.alert("Error", "Please enter a search term");
      return;
    }

    setLoading(true);
    try {
      const response = await searchMovies(searchQuery.trim());
      const data: SearchResult = response.data;
      console.log("Search results:", data);
      setSearchResults(data.results);
      setShowResults(true);
    } catch (error) {
      console.log("Search error:", error);
      Alert.alert("Error", "Failed to search movies");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  const handleBackPress = () => {
    if (showResults) {
      handleClearSearch();
    } else {
      navigation.goBack();
    }
  };

  const handleMoviePress = (movie: Movie) => {
    navigation.navigate("MovieDetails", { movieId: movie.id });
  };

  const renderCategory = ({ item }: { item: any }) => (
    <ImageBackground style={styles.categoryCard} source={item.image}>
      <View style={styles.categoryOverlay}>
        <Typography type="SIXTEENMEDIUM" style={styles.categoryTitle}>
          {item.title}
        </Typography>
      </View>
    </ImageBackground>
  );

  const renderSearchResult = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      style={styles.searchResultItem}
      onPress={() => handleMoviePress(item)}
    >
      <Image
        source={{
          uri: item.poster_path
            ? `${URLS.imageBaseUrl}${item.poster_path}`
            : "https://via.placeholder.com/100x150?text=No+Image",
        }}
        style={styles.resultImage}
      />
      <View style={styles.resultInfo}>
        <Typography type="SIXTEENBOLD" style={styles.resultTitle}>
          {item.title}
        </Typography>
        <Typography type="FOURTEENREGULAR" style={styles.resultGenre}>
          {new Date(item.release_date).getFullYear().toString() || "Unknown"}
        </Typography>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <ThreeDots color={AppColors.blue} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {showResults && (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <BackIcon color={AppColors.darkPurple} />
          </TouchableOpacity>
        )}
        <View style={styles.searchContainer}>
          <InputField
            placeholder="TV shows, movies and more"
            value={searchQuery}
            onChangeText={handleSearchChange}
            onPrefixPress={handleSearch}
            onSuffixPress={handleClearSearch}
          />
        </View>
      </View>
      {!showResults ? (
        <FlashList
          data={categories}
          renderItem={renderCategory}
          numColumns={2}
          contentContainerStyle={styles.categoriesContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      ) : (
        <View style={styles.resultsContainer}>
          <View style={styles.resultsHeader}>
            <Typography type="SIXTEENBOLD" style={styles.resultsTitle}>
              {searchResults.length.toString()} Results Found
            </Typography>
          </View>

          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={AppColors.blue} />
            </View>
          ) : (
            <FlashList
              data={searchResults}
              renderItem={renderSearchResult}
              keyExtractor={(item: Movie) => item.id.toString()}
              contentContainerStyle={styles.resultsContent}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      )}
    </View>
  );
}
