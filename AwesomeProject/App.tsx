import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { GoalsView } from "./components/GoalsView";
import { GoalInput } from "./components/GoalInput";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const [outputText, setOutputText] = useState("");
  const [enteredGoals, setEnteredGoals] = useState<string[]>([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput outputText={outputText} setOutputText={setOutputText} setEnteredGoals={setEnteredGoals} />
      <GoalsView goals={enteredGoals} setEnteredGoals={setEnteredGoals}/>
      <StatusBar style="auto" />
    </View>
    
  );
}
