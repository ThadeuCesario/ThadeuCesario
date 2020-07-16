import React from 'react';
import {View, StyleSheet} from 'react-native';

/* Components */
/* import PrimeiroComponente from './components/Primeiro';
import {MultiComponenteOne, MultiComponenteTwo, MultiComponenteThree as AnoterName} from './components/Multi'; */
import MinMax from './components/MinMax';

export default () => {
    return(
        <View style={style.App}>
            {/* <PrimeiroComponente></PrimeiroComponente>
            <MultiComponenteOne />
            <MultiComponenteTwo />
            <AnoterName /> */}
            <MinMax min={3} max={30}/>
            <MinMax min={1} max={94}/>
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