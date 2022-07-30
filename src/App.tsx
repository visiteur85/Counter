import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from "./Count";
import {CountSettings} from "./CountSetings";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {
    CountType,
    increaseCountAC, resetDisableAC,
    resetSetCountAC, SetCountAC, SetErrorTextAC,
    setIncrIncDisableAC, SetMaxCountAC, setSaveDisableAC,
    setStartCountAC
} from "./store/countReucer";
import {rootReducerType} from "./store/store";


export const App = () => {

    // let [count, setCount] = useState<number>(0);
    // let [startCount, setStartCount] = useState<number>(0);
    // let [maxCount, SetMaxCount] = useState<number>(0);
    // let [incDisable, setIncrIncDisable] = useState<boolean>(false);
    // let [setDisable, setSaverDisable] = useState<boolean>(true);
    // let [error, setError] = useState("");


    let count = useSelector<rootReducerType, number>(state => state.count.count);
    let maxCount = useSelector<rootReducerType, number>(state => state.count.maxCount);
    let startCount = useSelector<rootReducerType, number>(state => state.count.startCount);
    let error = useSelector<rootReducerType, string>(state => state.count.error);
    let incDisable = useSelector<rootReducerType, boolean>(state => state.count.incDisable);
    let resDisable = useSelector<rootReducerType, boolean>(state => state.count.resDisable);
    let setDisable = useSelector<rootReducerType, boolean>(state => state.count.setDisable);


    let dispatch = useDispatch()

    const increment = () => {

        if (count >= maxCount) {
            // setIncrIncDisable(true)
            dispatch(setIncrIncDisableAC(true))

        } else {
            dispatch(increaseCountAC())
        }

    };
//перезагрузка счетчик
    const reset = () => {
        dispatch(resetSetCountAC())
        dispatch(setIncrIncDisableAC(false))


    };

    const itemForStartCounter = (value: number) => {

        dispatch(setStartCountAC(value))
        //
        if (value) {
            dispatch(setSaveDisableAC(false))
        }
        if (value) {
            dispatch(resetDisableAC(true))


        }

        if (value || value === 0) {
            dispatch(SetErrorTextAC("Введите число"))
            dispatch(setSaveDisableAC(false))
            dispatch(setIncrIncDisableAC(false))
            if (value < 0 || (value === maxCount) || value > maxCount) {
                dispatch(SetErrorTextAC("Ошибка"))
                dispatch(setSaveDisableAC(true))
                dispatch(setIncrIncDisableAC(true))

            }

        }
    }
    const itemForMaxtCounter = (value: number) => {

        dispatch(SetMaxCountAC(value))
        if (value) {
            dispatch(setSaveDisableAC(false))
        }
        if (value) {
            dispatch(resetDisableAC(true))

        }

        if (value) {

            dispatch(SetErrorTextAC("Введите число"))
            dispatch(setSaveDisableAC(false))
            dispatch(setIncrIncDisableAC(false))
            if (value < 0 || (value === startCount ) || value < startCount && value != 0) {
                dispatch(SetErrorTextAC("Ошибка"))
                dispatch(setSaveDisableAC(true))
                dispatch(setIncrIncDisableAC(true))
            }


        }
    }


    // useEffect(() => {
    //     let max = localStorage.getItem("counterValueMax")
    //     let min = localStorage.getItem("counterValueStart")
    //     if (max && min) {
    //         SetMaxCount(+max)
    //         setStartCount(+min)
    //     }
    // }, []);


    const forSet = () => {
        dispatch(SetCountAC(startCount))
        dispatch(SetErrorTextAC(""))
        dispatch(setSaveDisableAC(true))
        dispatch(resetDisableAC(false))

        // localStorage.setItem("counterValueStart", JSON.stringify(startCount));
        // localStorage.setItem("counterValueMax", JSON.stringify(maxCount));
    }


    // if (startCount < 0 || maxCount < 0 || startCount > maxCount || startCount === maxCount) {
    //     dispatch(setSaveDisableAC(true))
    // }
    return (
        <div>
            <Count maxCount={maxCount} count={count}
                   error={error}

            />
            <Button disable={incDisable} callback={increment} buttonName={"inc"}/>
            <Button disable={resDisable} callback={reset} buttonName={"reset"}/>
            <CountSettings itemForStartCounter={itemForStartCounter}
                           startCount={startCount}
                           maxCount={maxCount}
                           itemForMaxtCounter={itemForMaxtCounter}

            />
            <Button disable={setDisable} buttonName={"set"} callback={forSet}/>

        </div>
    )

}
