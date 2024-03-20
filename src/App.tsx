import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {one, two, three, four, five, six} from '../assets';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type Diceprops = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: Diceprops): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

const App = (): JSX.Element => {
  const [dice, setDice] = useState<ImageSourcePropType>(one);
  const [diceTwo, setDiceTwo] = useState<ImageSourcePropType>(one);

  const rollDiceOnTap = () => {
    let randomNumber = Math.round(Math.random() * 6) + 1;
    let randomNumberTwo = Math.round(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDice(one);
        break;
      case 2:
        setDice(two);
        break;
      case 3:
        setDice(three);
        break;
      case 4:
        setDice(four);
        break;
      case 5:
        setDice(five);
        break;
      case 6:
        setDice(six);
        break;
      default:
        setDice(one);
        break;
    }
    switch (randomNumberTwo) {
      case 1:
        setDiceTwo(one);
        break;
      case 2:
        setDiceTwo(one);
        break;
      case 3:
        setDiceTwo(three);
        break;
      case 4:
        setDiceTwo(four);
        break;
      case 5:
        setDiceTwo(five);
        break;
      case 6:
        setDiceTwo(six);
        break;
      default:
        setDiceTwo(one);
        break;
    }

    ReactNativeHapticFeedback.trigger('impactLight', options);
  };
  return (
    <View style={styles.container}>
      <View>
        <Dice imageUrl={dice} />
        <Dice imageUrl={diceTwo} />
      </View>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>roll the dice</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
