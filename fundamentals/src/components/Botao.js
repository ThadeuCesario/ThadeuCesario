import React from 'react';
import {Button} from 'react-native';

export default props => {

    function executar(){
        console.warn('React Native é show!!!!!');
    }

    return(
        <Button title={'Executar!'} onPress={executar}/>
    );
}