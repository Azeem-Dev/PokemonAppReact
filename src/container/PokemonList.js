import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import _ from 'lodash';

const PokemonList = ()=>{
    const dispatch = useDispatch();
    const PokemonList = useSelector(state=>state.PokemonList);
    
    const ShowData=()=>{
        if(!_.isEmpty(PokemonList.data)){
            
        }
    }
    return(
        <div>{}</div>
    )
}

export default PokemonList;