import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import YoutubePlayer from "react-native-youtube-iframe";
import Typography from "@components/typoGraphy";
import styles from "./styles";
import { AppColors } from "@config/appColor";

interface VideoPlayerModalProps {
  visible: boolean;
  videoUrl: string;
  onClose: () => void;
  onError?: (error: any) => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  visible,
  videoUrl,
  onClose,
  onError,
}) => {
  console.log("VideoPlayerModal rendered with videoUrl:", videoUrl);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [playing, setPlaying] = useState(true);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);
  useEffect(() => {
    if (visible) {
      setLoading(true);
      setError(false);
      setPlaying(true);
    }
  }, [visible]);

  const handleVideoReady = () => {
    console.log("YouTube video ready");
    setLoading(false);
  };

  const handleVideoError = (error: string) => {
    console.log("YouTube Video Error:", error);
    setLoading(false);
    setError(true);
    onError?.(error);
    Alert.alert(
      "Video Error",
      "Failed to load the trailer. Please try again later.",
      [{ text: "OK", onPress: onClose }]
    );
  };

  const handleVideoEnd = () => {
    console.log("Video ended, closing modal");
    onClose();
  };

  const handleDonePress = () => {
    onClose();
  };

  if (!visible) {
    return null;
  }

  // Handle invalid video URL
  if (!videoId) {
    return (
      <Modal isVisible={visible} onBackdropPress={onClose} style={styles.modal}>
        <StatusBar hidden />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={handleDonePress}
            >
              <Typography type="SIXTEENMEDIUM" style={styles.doneText}>
                Done
              </Typography>
            </TouchableOpacity>
          </View>
          <View style={styles.errorContainer}>
            <Typography type="SIXTEENMEDIUM" style={styles.errorText}>
              Invalid video URL
            </Typography>
            <TouchableOpacity style={styles.retryButton} onPress={onClose}>
              <Typography type="FOURTEENMEDIUM" style={styles.retryText}>
                Go Back
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={1}
      backdropColor="black"
      style={styles.modal}
    >
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.doneButton} onPress={handleDonePress}>
            <Typography type="SIXTEENMEDIUM" style={styles.doneText}>
              Done
            </Typography>
          </TouchableOpacity>
        </View>
        <View style={styles.videoContainer}>
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={AppColors.white} />
              <Typography type="FOURTEENREGULAR" style={styles.loadingText}>
                Loading trailer...
              </Typography>
            </View>
          )}

          {!error && videoId && (
            <YoutubePlayer
              height={300}
              width="100%"
              play={playing}
              videoId={videoId}
              onReady={handleVideoReady}
              onError={handleVideoError}
              onChangeState={(state: string) => {
                console.log("YouTube player state:", state);
                if (state === "ended") {
                  handleVideoEnd();
                }
              }}
              webViewStyle={{
                opacity: loading ? 0 : 1,
              }}
              initialPlayerParams={{
                controls: true,
                modestbranding: true,
                showClosedCaptions: false,
                rel: false,
              }}
            />
          )}

          {error && (
            <View style={styles.errorContainer}>
              <Typography type="SIXTEENMEDIUM" style={styles.errorText}>
                Failed to load trailer
              </Typography>
              <TouchableOpacity style={styles.retryButton} onPress={onClose}>
                <Typography type="FOURTEENMEDIUM" style={styles.retryText}>
                  Go Back
                </Typography>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default VideoPlayerModal;
