const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action
function buyCake () {
    return {
    type: BUY_CAKE,
    info: 'First Redux Action'
}
}

function buyIceCream () {
    return {
        type: BUY_ICECREAM,
    }
}
//(previousState, action)=> newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

// //Reducer function
// const reducer = (state=initialState, action) =>{
//     switch(action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state, numOfCakes: state.numOfCakes - 1
//             }
//             case BUY_ICECREAM: 
//             return{
//                 ...state, numOfIceCreams: state.numOfIceCreams - 1
//             }
//             default: return state
//     }
// }

//Icecream state
const initialIceCreamState = {

    numOfIceCreams: 20
}

//Cake state
const initialCakeState = {
    numOfCakes: 10
}
// Cake Reducer function
const cakeReducer = (state=initialCakeState, action) =>{
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state, numOfCakes: state.numOfCakes - 1
            }
    
            default: return state
    }
}

//IceCream Reducer function
const iceCreamReducer = (state=initialIceCreamState, action) =>{
    switch(action.type) {
        case BUY_ICECREAM: 
            return{
                ...state, numOfIceCreams: state.numOfIceCreams - 1
            }
            default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
 console.log('initial state', store.getState())
 //subscribe to the chnages in the store
 const unsubscribe = store.subscribe(()=>{})
 //dispatch actions to update the store
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIceCream())
 store.dispatch(buyIceCream())
 //unsubscribe from changes in the store
 unsubscribe()
