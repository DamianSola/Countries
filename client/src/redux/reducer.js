

const initialState= {
    countriesShow: [],
    countries: [],
    detail:{},
    activities: [],
    activity: {}
} 


const Reducer = (state = initialState, action) =>{
    switch (action.type){
        case "GET_ALL_COUNTRIES":
            return{
                ...state,
                countriesShow: action.payload,
                countries: action.payload,
            }
        case "GET_COUNTRY":
            return{
                ...state,
                countriesShow: [action.payload]
            }
            case "FILTER_BY_CONTINENT":
                let allCountries = state.countries;
                let filterCountries = action.payload==="all"?allCountries:allCountries.filter(c => c.continent === action.payload)
                return{
                    ...state,
                    countriesShow: filterCountries
                }
        // case "CREATE_ACTIVITY":
        //     return{
        //         ...state,
        //         activities: [...state.activities, action.payload]
        //     }
        case "GET_ALL_ACTIVITY":
            return{
                ...state,
                activities: action.payload
            }
        case "GET_DETAIL":
            // console.log(action.payload)
            return{
                ...state,
                detail: action.payload
            }
        case "GET_ACTIVITY":
            return{
                ...state,
                activity: state.activities.find(e => e.country === action.payload)
            }
        case "DELETE_ACTIVITY":
            return{
                ...state,
                activities: state.activities.filter(e => e.id !== action.payload)
            }
        default: return state;
    }
}

export default Reducer;
