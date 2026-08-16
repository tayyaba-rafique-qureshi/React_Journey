prop drilling: When data is passed from the top component to lower components through multiple levels, it is called prop drilling.

If the component hierarchy changes, we have to update props in many files, making the code difficult to maintain.

Redux solves this problem by providing a central store where the application's state is kept. Any component can access or update the data directly without passing props through every level.



Redux terms:
action An object that tells Redux what operation to perform
slice    A file that contains the state, reducers, and actions for a specific feature
reducer   A function that updates the state based on the received action
state     The data stored in Redux
store   The central place where the application's state is stored



Steps to Use Redux
Install Redux Toolkit and React Redux.
Create the Redux store.
Wrap the root component (App) inside the Provider.
Create a slice using createSlice().
Register the slice reducer in the store.
Access state using the useSelector() hook.
Update state using the useDispatch() hook.
Dispatch actions like increment(), decrement(), reset(), etc.


Component
    ↓
dispatch(action)
    ↓
Reducer
    ↓
Store updates state
    ↓
useSelector gets updated state
    ↓
Component re-renders