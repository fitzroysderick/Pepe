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
      <Stack.Screen name="/chapter/[id]" />
    </Stack>
  );
}
