import { Stack } from "expo-router";

export default function App() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="chapters/index" />
      <Stack.Screen name="course-material/index" />
      <Stack.Screen name="overview-map/index" />
      <Stack.Screen name="quiz-assessment/index" />
    </Stack>
  );
}
