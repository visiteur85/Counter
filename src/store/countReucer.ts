

export type CountType = {
    count:number
    startCount:number
    maxCount:number
    incDisable:boolean
    setDisable:boolean
    error:string
    resDisable:boolean
}
let initialState: CountType = {
    count:0,
    startCount:0,
    maxCount:0,
    incDisable:false,
    setDisable:true,
    error:"",
    resDisable:false
}

    export const countReucer = (state = initialState, action: MainType):CountType => {
    switch (action.type) {
        case "SET-START-COUNT": {
            let newState = {...state};
            newState.startCount=action.value
            return newState
        }
        case "INCREASE-COUNT": {
            let newState = {...state}
            newState.count +=1
            return newState
        }
        case "SET-INCR-DISABLE": {
            let newState = {...state}
            newState.incDisable = action.value
            return newState
        }
        case "RESET-COUNT": {
            let newState = {...state}
            newState.count = state.startCount
            // newState.count = 0
            return newState
        }
        case "SET-SAVE-DISABLE": {
            let newState = {...state}
            newState.setDisable = action.value;
            return newState
        }
        case "RESET-DISABLE": {
            let newState = {...state}
            newState.resDisable = action.value
            return newState
        }
        case "SET-ERROR-TEXT": {
            let newState = {...state}
            newState.error = action.value
            return newState
        }
        case "SET-MAX-COUNT": {
            let newState = {...state}
            newState.maxCount = action.value
            return newState
        }
        case "SET-COUNT": {
            let newState = {...state}
            newState.count = action.value
            return newState
        }

        default: return state
    }
    };

export type MainType = SetStartCountType | IncreaseCountType |
    setIncrIncDisableType | resetSetCountType  | setSaveDisableType | ResetDisableType | SetErrorTextType
    | SetMaxCountType | SetCountType;
//устанавливаем стартовое значение
type SetStartCountType = ReturnType<typeof setStartCountAC >
export const setStartCountAC = (value:number) => {
    return {
    type: "SET-START-COUNT",
        value:value
    } as const

};

//добавляем 1 при нажатии на кнопку inc
type IncreaseCountType = ReturnType<typeof increaseCountAC >
export const increaseCountAC = () => {
    return {
        type: "INCREASE-COUNT",

    } as const

};

//дизейблим или нет кнопку inc
type setIncrIncDisableType = ReturnType<typeof setIncrIncDisableAC >
export const setIncrIncDisableAC = (value:boolean) => {
    return {
        type: "SET-INCR-DISABLE",
        value

    } as const

};

//устанавливаем стартовое значение после нажатия кнопки reset
type resetSetCountType = ReturnType<typeof resetSetCountAC >
export const resetSetCountAC = () => {
    return {
        type: "RESET-COUNT",

    } as const

};

//дизэйблим кнопку set
type setSaveDisableType = ReturnType<typeof setSaveDisableAC >
export const setSaveDisableAC = (value:boolean) => {
    return {
        type: "SET-SAVE-DISABLE",
        value


    } as const
};

//дизэйбл кнопки резет
type ResetDisableType = ReturnType<typeof resetDisableAC >
export const resetDisableAC = (value:boolean) => {
    return {
        type: "RESET-DISABLE",
        value


    } as const

};

//устанавливаем текст ошибки
type SetErrorTextType = ReturnType<typeof SetErrorTextAC >
export const SetErrorTextAC = (value:string) => {
    return {
        type: "SET-ERROR-TEXT",
        value


    } as const

};

//устанавливаем максиальное значение
type SetMaxCountType = ReturnType<typeof SetMaxCountAC >
export const SetMaxCountAC = (value:number) => {
    return {
        type: "SET-MAX-COUNT",
        value


    } as const

};
//устанавливаем значение в поле вывода числа
type SetCountType = ReturnType<typeof SetCountAC >
export const SetCountAC = (value:number) => {
    return {
        type: "SET-COUNT",
        value


    } as const

};

