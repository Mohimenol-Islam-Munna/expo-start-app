import { Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  console.log("🚀 ~ Index ~ insets:", insets)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Content is in safe area view.</Text>
    </SafeAreaView>
  );
}
