import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    borderBottomWidth: 1,
  },
  textInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  outputText: string;
  setOutputText: React.Dispatch<React.SetStateAction<string>>;
  setEnteredGoals: React.Dispatch<React.SetStateAction<string[]>>;
};

export const GoalInput = (props: Props) => {
  const goalInputHandler = (enteredText: string) => {
    props.setOutputText(enteredText);
  };

  const addGoalHandler = () => {
    props.setEnteredGoals((current) => [...current, props.outputText]);
    props.setOutputText("");
  };

  return (
    <Modal visible={true} animationType="slide" style={styles.modal}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal"
          onChangeText={(text) => goalInputHandler(text)}
          value={props.outputText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};
