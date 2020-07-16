import React from 'react';
import {View, Text} from 'react-native';

import PrimeiroComponente from './components/Primeiro';
import {MultiComponenteOne, MultiComponenteTwo, MultiComponenteThree as AnoterName} from './components/Multi';

export default () => {
    return(
        <View>
            <Text>{2+2}</Text>
            <PrimeiroComponente></PrimeiroComponente>
            <MultiComponenteOne />
            <MultiComponenteTwo />
            <AnoterName />
        </View>
    )
}
