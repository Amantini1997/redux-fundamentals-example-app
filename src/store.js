import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

// import { includeMeaningOfLife, sayHiOnDispatch } from './exampleAddons/enhancers'
import { print1, print2, print3 } from './exampleAddons/middleware'

// const enhancers = compose(includeMeaningOfLife, sayHiOnDispatch)
// const store = createStore(rootReducer, enhancers)

const middlewareEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(print1, print2, print3)
    // other store enhancers if any
  )
const store = createStore(rootReducer, middlewareEnhancer)

export default store
