import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from "./Count";
import {CountSettings} from "./CountSetings";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {
    CountType,
    increaseCountAC,
    resetIncrIncDisableAC,
    resetSetCountAC,
    setIncrIncDisableAC,
    setStartCountAC
} from "./store/countReucer";
import {rootReducerType} from "./store/store";

//остановился на 49 строке. возможно дублирование крейторов
export const App = () => {

    // let [count, setCount] = useState<number>(0);
    // let [startCount, setStartCount] = useState<number>(0);
    let [maxCount, SetMaxCount] = useState<number>(0);
    // let [incDisable, setIncrIncDisable] = useState<boolean>(false);
    let [setDisable, setSaverDisable] = useState<boolean>(true);
    let [error, setError] = useState("");
    let [resDisable, setResetDisable] = useState<boolean>(false);

    let count = useSelector<rootReducerType, CountType>(state=>state.count)
    let dispatch = useDispatch()

    const increment = () => {
        dispatch(increaseCountAC())
        if (count.count >= count.maxCount) {
            // setIncrIncDisable(true)
            dispatch(setIncrIncDisableAC())
        }

    };
//перезагрузка счетчика
    const reset = () => {
        // setCount(startCount);
        // setIncrIncDisable(false);
        dispatch(resetSetCountAC())
        dispatch(resetIncrIncDisableAC())


    };

    const itemForStartCounter = (value: number) => {
        // setStartCount(value)
        //
        // if (value) {
        //     setSaverDisable(false)
        //
        // }
        // if (value) {
        //     setResetDisable(true)
        //
        // }
        // if (value) {
        //     setError("Введите число")
        //     if (value < 0 || (value === maxCount && value != 0)) {
        //         setError("Ошибка")
        //     }
        //
        // }
        dispatch(setStartCountAC(value))
    }
    const itemForMaxtCounter = (value: number) => {


        // SetMaxCount(value)
        // if (value) {
        //     setSaverDisable(false)
        // }
        // if (value) {
        //     setResetDisable(true)
        //
        // }
        //
        // if (value) {
        //     setError("Введите число")
        //     if (value < 0 || (value === startCount && value != 0)) {
        //         setError("Ошибка")
        //     }
        //
        //
        // }
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
        // setCount(startCount)
        // setError("")
        // setSaverDisable(true);
        // setResetDisable(false);
        // localStorage.setItem("counterValueStart", JSON.stringify(startCount));
        // localStorage.setItem("counterValueMax", JSON.stringify(maxCount));
    }


    // if (startCount < 0 || maxCount < 0 || startCount > maxCount || startCount === maxCount) {
    //     setDisable = (true)
    // }
    return (
        <div>
            <Count maxCount={maxCount} count={count.count}
                   error={error}

            />
            <Button disable={count.incDisable} callback={increment} buttonName={"inc"}/>
            <Button disable={resDisable} callback={reset} buttonName={"reset"}/>
            <CountSettings itemForStartCounter={itemForStartCounter}
                           startCount={count.startCount}
                           maxCount={maxCount}
                           itemForMaxtCounter={itemForMaxtCounter}

            />
            <Button disable={setDisable} buttonName={"set"} callback={forSet}/>

        </div>
    )

}
