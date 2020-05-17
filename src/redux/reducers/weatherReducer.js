import { CHANGE_LIMIT, UPDATE_WEATHER, SET_WEATHER_LOADING, GET_WEATHER_FAILURE} from "../actions/weatherActions"


const initialState = {
    forecasts: [], 
    limit: 5,
    cityName: '',
    current: {},
    isLoading: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LIMIT:
            return {
                ...state,
                limit: action.payload.limit
            };
        case SET_WEATHER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case GET_WEATHER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }

        case UPDATE_WEATHER:
            return {
                ...state,
                cityName: action.payload.weather.cityName,
                current: action.payload.weather.current,
                forecasts: action.payload.weather.forecasts
            }
            
        
        default: 
            return state;
    }
}

export default reducer;