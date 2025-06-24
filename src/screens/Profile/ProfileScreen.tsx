import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

interface ProfileData {
  age: number;
  gender: string;
  height: number;
  weight: number;
  fitnessLevel: string;
  goal: string;
}

const STORAGE_KEY = '@CaliMaster:profile';

const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>({
    age: 0,
    gender: 'Male',
    height: 0,
    weight: 0,
    fitnessLevel: 'Beginner',
    goal: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          setProfile(JSON.parse(json));
        }
      } catch (e) {
        console.error('Failed to load profile', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const save = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
      Alert.alert('Profile saved');
    } catch (e) {
      console.error('Failed to save profile', e);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="number-pad"
        value={profile.age ? profile.age.toString() : ''}
        onChangeText={text =>
          setProfile({...profile, age: parseInt(text, 10) || 0})
        }
      />
      <Picker
        selectedValue={profile.gender}
        onValueChange={gender => setProfile({...profile, gender})}
        style={styles.input}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="number-pad"
        value={profile.height ? profile.height.toString() : ''}
        onChangeText={text =>
          setProfile({...profile, height: parseInt(text, 10) || 0})
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="number-pad"
        value={profile.weight ? profile.weight.toString() : ''}
        onChangeText={text =>
          setProfile({...profile, weight: parseInt(text, 10) || 0})
        }
      />
      <Picker
        selectedValue={profile.fitnessLevel}
        onValueChange={level => setProfile({...profile, fitnessLevel: level})}
        style={styles.input}>
        <Picker.Item label="Beginner" value="Beginner" />
        <Picker.Item label="Intermediate" value="Intermediate" />
        <Picker.Item label="Advanced" value="Advanced" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Training goal"
        value={profile.goal}
        onChangeText={goal => setProfile({...profile, goal})}
      />
      <Button title="Save" onPress={save} />
    </View>
  );
};

export default ProfileScreen;
