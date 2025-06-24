import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import styles from './styles';

export type OnboardingStep2Props = NativeStackScreenProps<RootStackParamList, 'OnboardingStep2'>;

const OnboardingStep2: React.FC<OnboardingStep2Props> = ({navigation, route}) => {
  const {answers} = route.params;
  const [stepAnswer] = useState('step2');

  const finish = () => {
    console.log([...answers, stepAnswer]);
    navigation.reset({index: 0, routes: [{name: 'HomeTabs'}]});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Almost Done!</Text>
      <Text style={styles.text}>You're ready to start using the app.</Text>
      <Button title="Finish" onPress={finish} />
    </View>
  );
};

export default OnboardingStep2;
