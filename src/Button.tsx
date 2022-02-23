import React from 'react';

type PropsType = {
    buttonName: string
    callback: () => void
    disable:boolean


}

export const Button: React.FC<PropsType> = props => {
    const {buttonName, callback,disable} = props

    const onclickHandler = () => {
        callback()

    }
    return (
        <div>
            <button disabled={disable} onClick={onclickHandler}>{buttonName}</button>

        </div>
    );
};

