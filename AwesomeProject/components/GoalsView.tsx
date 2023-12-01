import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

const styles = StyleSheet.create({
  resultContainer: {
    flex: 8,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 1,
    marginVertical: 10,
    paddingTop: 20,
  },
  goalText: {
    color: "white",
    fontSize: 16,
  },
  goalItem: {
    backgroundColor: "#1DA1F2",
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
});

type Props = {
  goals: string[];
  setEnteredGoals: React.Dispatch<React.SetStateAction<string[]>>;
};

export const GoalsView = (props: Props) => {

    const deleteGoalHandler = (index: number) => {
        props.setEnteredGoals((current) => {
            return current.filter((_, i) => i !== index)
        })
    }

  return (
    <View style={styles.resultContainer}>
      <FlatList
        data={props.goals}
        renderItem={({ item, index}) => {
          return (
            <Pressable onPress={() => deleteGoalHandler(index)}>
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{item}</Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  );
};
