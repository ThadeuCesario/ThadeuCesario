import React from 'react';
import {Button} from 'react-native';

export default props => {

    function executar(){
        console.warn('Te amo Karina');
    }

    return(
        <Button title={'Executar!'} onPress={executar}/>
    );
}