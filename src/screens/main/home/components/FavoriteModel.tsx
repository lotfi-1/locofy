import Modal from "react-native-modal";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useEffect, useState } from "react";
import { clearFavoriteAction, toggleFavorite } from "../../../../store/slices";
import { View, Text } from "react-native";
import { useTheme } from "../../../../contexts/ThemeProvider";
import { Flight } from "../../../../types/Flight";

interface FlightModelProps {
  flight: Flight;
}

export const FavoriteModel: React.FC<FlightModelProps> = ({ flight }: FlightModelProps) => {
  const { colors } = useTheme();
  const favoriteAction = useAppSelector((state) => state.flight.favoriteAction);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!favoriteAction) return;
    const msg =
      favoriteAction === "added"
        ? "This destination has been added to your favourite"
        : "This destination has been removed from your favourite";

    setAlertMessage(msg);
    setShowAlert(true);
    const timeout = setTimeout(() => {
      dispatch(clearFavoriteAction());
      setShowAlert(false)
    }, 2000);
    return () => clearTimeout(timeout);
  }, [favoriteAction]);
  return <Modal
    isVisible={showAlert}
    animationIn="fadeInUp"
    animationOut="fadeOutDown"
    backdropOpacity={0.3}
  >
    <View
      style={{
        backgroundColor: colors.surface,
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.text.primary, fontSize: 14 }}>{alertMessage}</Text>
    </View>
  </Modal>
    ;
}


