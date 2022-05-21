

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
            newState.incDisable = true
            return newState
        }
        case "RESET-COUNT": {
            let newState = {...state}
            newState.count = state.startCount
            return newState
        }
        case "RESET-INCDISABLE": {
            let newState = {...state}
            newState.incDisable = false
            return newState
        }

        default: return state
    }
    };

export type MainType = SetStartCountType | IncreaseCountType |
    setIncrIncDisableType | resetSetCountType | resetIncrIncDisableType ;

type SetStartCountType = ReturnType<typeof setStartCountAC >
export const setStartCountAC = (value:number) => {
    return {
    type: "SET-START-COUNT",
        value:value
    } as const

};

type IncreaseCountType = ReturnType<typeof increaseCountAC >
export const increaseCountAC = () => {
    return {
        type: "INCREASE-COUNT",

    } as const

};

type setIncrIncDisableType = ReturnType<typeof setIncrIncDisableAC >
export const setIncrIncDisableAC = () => {
    return {
        type: "SET-INCR-DISABLE",

    } as const

};

type resetSetCountType = ReturnType<typeof resetSetCountAC >
export const resetSetCountAC = () => {
    return {
        type: "RESET-COUNT",

    } as const

};

type resetIncrIncDisableType = ReturnType<typeof resetIncrIncDisableAC >
export const resetIncrIncDisableAC = () => {
    return {
        type: "RESET-INCDISABLE",

    } as const

};

