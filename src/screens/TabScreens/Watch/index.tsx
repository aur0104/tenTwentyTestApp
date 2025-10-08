import React, { useState, useEffect, useCallback } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import styles from "./styles";
import Typography from "@components/typoGraphy";
import { SearchIcon } from "@assets/images";
import { getUpcomingMovies } from "@api";
import { AppColors } from "../../../config/appColor";
import { URLS } from "@api/client";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
}
interface ApiResponse {
  results: Movie[];
  total_pages: number;
  page: number;
}
export default function WatchScreen(props: any) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const fetchMovies = useCallback(
    async (pageNum: number = 1, isRefresh: boolean = false) => {
      if (loading && !isRefresh) return;
      setLoading(true);
      try {
        const response = await getUpcomingMovies(pageNum);
        const data: ApiResponse = response.data;
        if (isRefresh) {
          setMovies(data.results);
          setPage(1);
        } else {
          setMovies((prev) =>
            pageNum === 1 ? data.results : [...prev, ...data.results]
          );
        }
        setHasMore(pageNum < data.total_pages);
      } catch (error) {
        Alert.alert("Error", "Failed to fetch movies");
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [loading]
  );

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (hasMore && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchMovies(nextPage);
    }
  }, [hasMore, loading, page, fetchMovies]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    fetchMovies(1, true);
  }, [fetchMovies]);

  const renderMovie = useCallback(
    ({ item }: { item: Movie }) => (
      <TouchableOpacity
        style={styles.movieCard}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("MovieDetails", { movieId: item.id });
        }}
      >
        <Image
          source={{ uri: `${URLS.imageBaseUrl}${item.poster_path}` }}
          style={styles.posterImage}
          resizeMode="cover"
        />
        <View style={styles.movieOverlay}>
          <Typography type="SIXTEENBOLD" style={styles.movieTitle}>
            {item.title}
          </Typography>
        </View>
      </TouchableOpacity>
    ),
    []
  );

  const renderFooter = useCallback(() => {
    if (!loading || refreshing) return null;
    return (
      <View style={styles.loadingFooter}>
        <ActivityIndicator size="small" color={AppColors.blue} />
      </View>
    );
  }, [loading, refreshing]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Typography type="SIXTEENMEDIUM">Watch</Typography>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate("Search")}
        >
          <SearchIcon />
        </TouchableOpacity>
      </View>
      <FlashList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item: Movie) => item.id.toString()}
        numColumns={1}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}
