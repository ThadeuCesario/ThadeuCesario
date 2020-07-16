import React from 'react';
import {View, StyleSheet} from 'react-native';

import PrimeiroComponente from './components/Primeiro';
import {MultiComponenteOne, MultiComponenteTwo, MultiComponenteThree as AnoterName} from './components/Multi';

export default () => {
    return(
        <View style={style.App}>
            <PrimeiroComponente></PrimeiroComponente>
            <MultiComponenteOne />
            <MultiComponenteTwo />
            <AnoterName />
        </View>
    )
}


const style = StyleSheet.create({
    App:{
        padding: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});