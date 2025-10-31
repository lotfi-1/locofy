import { Image, StyleSheet, Text, View } from "react-native";
import { Destination } from "../../../../types/Destination";
import { AppFonts } from "../../../../utils";
import { useTheme } from "../../../../contexts/ThemeProvider";

interface DestinationCardProps {
  destination: Destination
}
export const DestinationCard = ({ destination }: DestinationCardProps) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <Image style={styles.image} source={{ uri: destination.image }} />

      <View style={styles.info}>
        <View>
          <Text style={[styles.name, { color: colors.text.primary }]}>{destination.name}</Text>
          <Text style={[styles.country, { color: colors.text.muted }]} > {destination.country}</Text>
        </View>
        <Text style={[styles.duration, { color: colors.text.gray, backgroundColor: colors.background }]}>{destination.duration}</Text>
      </View>

    </View >
  );

}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 10,
    gap: 10
  },
  image: {
    flex: 1
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontFamily: AppFonts.Inter_SemiBold
  },
  country: {
    fontSize: 12,
    fontFamily: AppFonts.Inter_Regular
  },
  duration: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4

  }

})
