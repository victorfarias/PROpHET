const initState = {
    answers:{
        male: {
            value: 0,
            disabled: false,
        },
        glycemia:{
            value: 0,
            disabled: false,
        },
        aspects:{
            value: 0,
            disabled: false,
        },
        acm:{
            value: 0,
            disabled: false,
        },
        microangiopathy:{
            value: 0,
            disabled: false,
        },
        lacunar_syndrome:{
            value: 0,
            disabled: false,
        },
        aortic_insufficiency:{
            value: 0,
            disabled: false,
        },
    },    
    questions: [
        'male', 'glycemia', 'aspects', 'acm', 'microangiopathy', 'lacunar_syndrome', 'aortic_insufficiency'
    ],
    locale:{
        lang: 'en'
    }
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    console.log(state);
    if(action.type==='CHANGE_VALUE'){
        return({
            ...state,
            answers:{
                ...state.answers,
                [action.question]:{
                    ...state.answers[action.question],
                    value: action.value,
                }
            }            
        })
    }else if(action.type==='CHANGE_DISABLED'){
        return({
            ...state,
            answers:{
                ...state.answers,
                [action.question]:{
                    ...state.answers[action.question],
                    disabled: !state.answers[action.question].disabled,
                }
            }
        })
    }else if(action.type==='CHANGE_LOCALE'){
        localStorage.lang = action.lang;
        return({
            ...state,
            locale:{
                ...state.locale,
                lang:action.lang,
            }
        })
    }
    return state;
}

export default rootReducer;