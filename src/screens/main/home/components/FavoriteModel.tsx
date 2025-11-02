import { Modal, View, Text, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useEffect, useState } from "react";
import { useTheme } from "../../../../contexts/ThemeProvider";
import { clearFavoriteError, updateFlight } from "../../../../store/slices";
import { AppFonts } from "../../../../utils";

export const FavoriteModel: React.FC = () => {
  const { favoriteAction, flight } = useAppSelector((state) => state.favoriteFlight);
  const { colors } = useTheme();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!favoriteAction) return;

    const message =
      favoriteAction === "added"
        ? "This destination has been added to your favourite"
        : "This destination has been removed from your favourite";

    setAlertMessage(message);
    setShowAlert(true);
    dispatch(updateFlight(flight));

    const timeout = setTimeout(() => {
      dispatch(clearFavoriteError());
      setShowAlert(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [favoriteAction]);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={showAlert}
    >
      <View style={[styles.overlay, { backgroundColor: "rgba(0,0,0,0.3)" }]}>
        <View
          style={[
            styles.container,
            { backgroundColor: colors.surface }
          ]}
        >
          <Text style={[styles.message, { color: colors.text.primary }]}>
            {alertMessage}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    minWidth: 200,
  },
  message: {
    fontFamily: AppFonts.Inter_Medium,
    fontSize: 14,
    lineHeight: 24,
    textAlign: "center"
  }
});
