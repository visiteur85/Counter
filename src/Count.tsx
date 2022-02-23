import React, {useState} from 'react';
import s from "./Count.module.css"


type countPropsType = {
    count: number
    maxCount: number
    error: string


}


export const Count: React.FC<countPropsType> = props => {

    let {count, error, maxCount} = props;

    console.log(error)


    return (
        <div>

            {error ? error : count}

        </div>
    );
};
