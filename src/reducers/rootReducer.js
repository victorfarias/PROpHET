const initState = {
    answers:{
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
    },    
    questions: [
        'male', 'glycemia', 'aspects', 'acm', 'microangiopathy', 'lacunar_syndrome', 'aortic_insufficiency'
    ],
    locale:{
        lang: 'en'
    }
}

const rootReducer = (state = initState, action) => {
    console.log(state);
    console.log(action);
    if(action.type==='CHANGE_CHECKED'){
        return({
            ...state,
            answers:{
                ...state.answers,
                [action.question]:{
                    ...state.answers[action.question],
                    checked: !state.answers[action.question].checked,
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