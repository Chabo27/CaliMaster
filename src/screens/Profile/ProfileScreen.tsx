import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

const ProfileScreen: React.FC = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('Beginner');
  const [goal, setGoal] = useState('');

  const save = () => {
    console.log({age, gender, height, weight, fitnessLevel, goal});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
      />
      <Picker selectedValue={gender} onValueChange={setGender} style={styles.input}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="number-pad"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="number-pad"
        value={weight}
        onChangeText={setWeight}
      />
      <Picker
        selectedValue={fitnessLevel}
        onValueChange={setFitnessLevel}
        style={styles.input}>
        <Picker.Item label="Beginner" value="Beginner" />
        <Picker.Item label="Intermediate" value="Intermediate" />
        <Picker.Item label="Advanced" value="Advanced" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Training goal"
        value={goal}
        onChangeText={setGoal}
      />
      <Button title="Save" onPress={save} />
    </View>
  );
};

export default ProfileScreen;
