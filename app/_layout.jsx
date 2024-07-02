import { Stack } from "expo-router";

export default function App() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="/course-material" />
      <Stack.Screen name="/chapters" />
      <Stack.Screen name="/quiz-assessment" />
      <Stack.Screen name="/overview-map" />
      {/* <Stack.Screen name="/chapter1" />
      <Stack.Screen name="/chapter2" />
      <Stack.Screen name="/chapter3" />
      <Stack.Screen name="/chapter4" />
      <Stack.Screen name="/chapter5" />
      <Stack.Screen name="/chapter6" /> */}
    </Stack>
  );
}
