import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DashboardScreen,
  WatchScreen,
  MediaLibraryScreen,
  MoreScreen,
  MovieDetailsScreen,
  SeatSelectionScreen,
  BookingConfirmationScreen,
} from "@screens";
import {
  DashBoardIcon,
  MediaLibraryIcon,
  MoreIcon,
  WatchIcon,
} from "@assets/images";
import { AppColors } from "@config/appColor";
import fonts from "@config/fonts";
import SearchMovieScreen from "@screens/StackScreens/SearchScreen";
const PlaceholderScreen = ({ route }: any) => {
  const { name } = route;
  return null;
};

// Custom Tab Label Component
const CustomTabLabel = ({
  focused,
  title,
}: {
  focused: boolean;
  title: string;
}) => (
  <Text
    style={{
      fontSize: 10,
      fontFamily: focused
        ? fonts.FONT_FAMILIES.BOLD
        : fonts.FONT_FAMILIES.REGULAR,
      color: focused ? "#fff" : "#67686D",
    }}
  >
    {title}
  </Text>
);

export type RootStackParamList = {
  TabNavigator: undefined;
  MovieDetails: { movieId: string; movieData?: any };
  SeatSelection: { movieId: string; showTime: string; date: string };
  BookingConfirmation: { bookingData: any };
  Search: { query?: string };
};

export type TabParamList = {
  Dashboard: undefined;
  Watch: undefined;
  MediaLibrary: undefined;
  More: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Tab Navigator Component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: AppColors.darkPurple,
          borderTopWidth: 0,
          // height: 80,
          //   paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#67686D",
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: fonts.FONT_FAMILIES.REGULAR,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel focused={focused} title="Dashboard" />
          ),
          tabBarIcon: ({ focused }) => (
            <DashBoardIcon color={focused ? "#fff" : "#67686D"} />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={WatchScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel focused={focused} title="Watch" />
          ),
          tabBarIcon: ({ focused }) => (
            <WatchIcon color={focused ? "#fff" : "#67686D"} />
          ),
        }}
      />

      <Tab.Screen
        name="MediaLibrary"
        component={MediaLibraryScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel focused={focused} title="Media Library" />
          ),
          tabBarIcon: ({ focused }) => (
            <MediaLibraryIcon color={focused ? "#fff" : "#67686D"} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel focused={focused} title="More" />
          ),
          tabBarIcon: ({ focused }) => (
            <MoreIcon color={focused ? "#fff" : "#67686D"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main Navigation Component
const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#1E1E1E" },
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchMovieScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SeatSelection"
        component={SeatSelectionScreen}
        options={{
          headerShown: false,
        }}
      />

      {/* Booking Confirmation Screen */}
      <Stack.Screen
        name="BookingConfirmation"
        component={BookingConfirmationScreen}
        options={{
          headerShown: true,
          headerTitle: "Booking Summary",
          headerStyle: {
            backgroundColor: "#1E1E1E",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "600",
          },
        }}
      />
    </Stack.Navigator>
  );
};

// Main App Navigation Container
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;

// Navigation helper functions for use in components
export const navigationHelpers = {
  // Navigate to movie details
  goToMovieDetails: (navigation: any, movieId: string, movieData?: any) => {
    navigation.navigate("MovieDetails", { movieId, movieData });
  },

  // Navigate to search
  goToSearch: (navigation: any, query?: string) => {
    navigation.navigate("Search", { query });
  },

  // Navigate to seat selection
  goToSeatSelection: (
    navigation: any,
    movieId: string,
    showTime: string,
    date: string
  ) => {
    navigation.navigate("SeatSelection", { movieId, showTime, date });
  },

  // Navigate to booking confirmation
  goToBookingConfirmation: (navigation: any, bookingData: any) => {
    navigation.navigate("BookingConfirmation", { bookingData });
  },

  // Go back to previous screen
  goBack: (navigation: any) => {
    navigation.goBack();
  },

  // Reset navigation to home
  resetToHome: (navigation: any) => {
    navigation.reset({
      index: 0,
      routes: [{ name: "TabNavigator" }],
    });
  },
};

// Export types for use in other components
export type StackNavigationProp = any; // Replace with proper typing
export type BottomTabNavigationProp = any; // Replace with proper typing
