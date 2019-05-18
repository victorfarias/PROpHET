const initState = {
    male: {
        checked: false,
        disabled: false,
    },
    glycemia:{
        checked: false,
        disabled: false,
    },
    aspects:{
        checked: false,
        disabled: false,
    },
    acm:{
        checked: false,
        disabled: false,
    },
    microangiopathy:{
        checked: false,
        disabled: false,
    },
    lacunar_syndrome:{
        checked: false,
        disabled: false,
    },
    aortic_insufficiency:{
        checked: false,
        disabled: false,
    },
    questions: [
        'male', 'glycemia', 'aspects', 'acm', 'microangiopathy', 'lacunar_syndrome', 'aortic_insufficiency'
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type==='CHANGE_CHECKED'){
        return({
            ...state,
            [action.question]:{
                ...state[action.question],
                checked: !state[action.question].checked,
            }
        })
    }else if(action.type==='CHANGE_DISABLED'){
        return({
            ...state,
            [action.question]:{
                ...state[action.question],
                disabled: !state[action.question].disabled,
            }
        })
    }
    return state;
}

export default rootReducer;