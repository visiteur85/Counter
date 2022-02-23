import React, {useEffect, useState} from 'react';
import './App.css';
import {Count} from "./Count";
import {CountSettings} from "./CountSetings";
import {Button} from "./Button";


export const App = () => {

    let [count, setCount] = useState<number>(0);
    let [startCount, setStartCount] = useState<number>(0);
    let [maxCount, SetMaxCount] = useState<number>(0);
    let [incDisable, setIncrIncDisable] = useState<boolean>(false);
    let [setDisable, setSaverDisable] = useState<boolean>(true);
    let [error, setError] = useState("");
    let [resDisable, setResetDisable] = useState<boolean>(false);

    const increment = () => {
        count++
        setCount(count)
        if (count >= maxCount) {
            setIncrIncDisable(true)
        }

    };

    const reset = () => {
        setCount(startCount);
        setIncrIncDisable(false);


    };

    const itemForStartCounter = (value: number) => {
        // console.log(value)
        setStartCount(value)
        if (value) {
            setSaverDisable(false)

        }
        if (value) {
            setResetDisable(true)

        }


        // setError("enter values and press \"set\"")
        // if (value <0) setError("Incorrect value");

        if (value) {
            setError("Введите число")
            if (value < 0 || (value === maxCount && value != 0)) {
                setError("Ошибка")
            }


        }
    }
    const itemForMaxtCounter = (value: number) => {

        // console.log(value)
        SetMaxCount(value)
        if (value) {
            setSaverDisable(false)
        }
        if (value) {
            setResetDisable(true)

        }
        // setError("enter values and press \"set\"")
        // if (value <0) setError("Incorrect value")
        if (value) {
            setError("Введите число")
            if (value < 0 || (value === startCount && value != 0)) {
                setError("Ошибка")
            }


        }
    }


    // useEffect(() => {
    //
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         SetMaxCount(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //         localStorage.setItem("counterValueMax", JSON.stringify(startCount))
    //     },
    //     [maxCount])

    useEffect(() => {
        let max = localStorage.getItem("counterValueMax")
        let min = localStorage.getItem("counterValueStart")
        if (max && min) {
            SetMaxCount(+max)
            setStartCount(+min)
        }
    }, [])

    // useEffect(() => {
    //         localStorage.setItem("counterValueStart", JSON.stringify(startCount))
    //     },
    //     [startCount])


    const forSet = () => {
        setCount(startCount)
        setError("")
        setSaverDisable(true);
        setResetDisable(false);
        localStorage.setItem("counterValueStart", JSON.stringify(startCount));
        localStorage.setItem("counterValueMax", JSON.stringify(maxCount));
    }


    if (startCount < 0 || maxCount < 0 || startCount > maxCount || startCount === maxCount) {
        setDisable = (true)
    }
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
