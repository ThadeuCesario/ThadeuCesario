import React from 'react';
import {View, Text} from 'react-native';

import PrimeiroComponente from './components/Primeiro';

export default () => {
    return(
        <View>
            <Text>{2+2}</Text>
            <PrimeiroComponente></PrimeiroComponente>
        </View>
    )
}
