import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {Button} from "./Button";

type CountSettingsPropsType = {
    itemForStartCounter:(value:number)=>void
    startCount:number
    maxCount:number
    itemForMaxtCounter:(value:number)=>void



}

export const CountSettings:React.FC<CountSettingsPropsType> = props => {

    const {itemForStartCounter, startCount, maxCount,itemForMaxtCounter} = props



const onChangeStartHandler = (e:ChangeEvent<HTMLInputElement>)=> {
    let startValue = +e.currentTarget.value;
    itemForStartCounter(startValue)
}

const onChangeMaxtHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        let maxValue = +e.currentTarget.value
    itemForMaxtCounter(maxValue)


}


    return (
        <div>
            <span>max value:</span>
            <input type={"number"} step={1} value={maxCount}
                   onChange={onChangeMaxtHandler} />
            <span  >start value:</span>
            <input type={"number"} step={1}
                   value={startCount}
                   onChange={onChangeStartHandler}/>


        </div>
    );
};

