[TOC]

# Files Structure

## store.js

	createStore(rootReducer)

## reducer.js
 	// for each field in the store
	rootReducer = combineReducers({
		field: fieldReducer
   	})

## features 

### field

#### slice

##### fieldSlice.js
		 	
	function fieldReducer(state, action) { 
		switch(action.type) {
			...
		}
	}
<br>
<br>
<br>

## Enhancers

Enhancers are functions that can override the `dispatch`, `getState`, and `subscribe` methods. They are combined together using the `combine` method.

This way, the `createStore` method can take the *reducers*, the *initial state* (which may be omitted), and the *enhancers*.

> Enhancers <u>**are**</u> allowed to have **side effects**.

<br>
<br>
<br>

## Middleware
Middleware are function that are triggered when a dispatch method is called. They intercept the call and can do asynchronous tasks, logging, alter the `action` object, etc.

Middleware are intended to contain logic with side effects. In addition, **middleware can modify dispatch to accept things that are not plain action objects**.

Several ones can be chained together using the `applyMiddleware` method.