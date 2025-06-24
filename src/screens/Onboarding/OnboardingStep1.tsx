import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import styles from './styles';

export type OnboardingStep1Props = NativeStackScreenProps<RootStackParamList, 'OnboardingStep1'>;

const OnboardingStep1: React.FC<OnboardingStep1Props> = ({navigation}) => {
  const [answers] = useState<string[]>([]);

  const handleNext = () => {
    navigation.navigate('OnboardingStep2', {answers: [...answers, 'step1']});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to CaliMaster</Text>
      <Text style={styles.text}>This short tutorial will guide you through the basics.</Text>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default OnboardingStep1;
