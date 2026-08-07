prop drilling: when data is se t from top to bottom hierarchy eg for state management etc what if the hierrchy tree is changed now we have a lot of qork to change for that we use redux that ets us have a store to manage states and data 

terms
action
alice
reducer
state
store

STEPS:
create store
wrap app component under Privider
create slice
register reducer in store
now we wont use useState to manage state of count variable rather we will use the value in counterslice file using useSelector Hook