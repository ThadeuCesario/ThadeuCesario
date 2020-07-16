import React, {useState} from 'react';
import {Text, Button} from 'react-native';

import Style from './estilo';

export default props => {
    //let {inicial} = props;
    const [inicial, setInicial] = useState(props.inicial);

    const incrementNumber = _ => {
        setInicial(inicial+1);
    }

    const decrementNumber = _ => {
        setInicial(inicial-1);
    }

    return(
        <>
            <Text style={Style.fontG}>{inicial}</Text>
            <Button title={'Incrementar'} onPress={incrementNumber} />
            <Button title={'Decrementar'} onPress={decrementNumber} />
        </>
    )
}