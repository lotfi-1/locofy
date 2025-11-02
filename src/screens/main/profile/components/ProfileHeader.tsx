import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ArrowLeftSvg, EdirSvg, Images } from '../../../../assets';
import { useTheme } from '../../../../contexts/ThemeProvider';

export default function ProfileHeader({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  return (
    <ImageBackground
      source={Images.cover}
      style={[styles.cover, { paddingTop: 30 }]}
      resizeMode="cover"
    >
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.actionIcon, { backgroundColor: colors.surface }]}
          onPress={() => navigation.navigate('Explore')}
        >
          <ArrowLeftSvg stroke={colors.text.primary} width={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionIcon, { backgroundColor: colors.surface }]}
          onPress={() => navigation.navigate('Explore')}
        >
          <EdirSvg fill={colors.text.primary} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cover: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  actions: {
    height: 68,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    padding: 6
  },
});
