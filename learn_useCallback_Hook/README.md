two benifits of useCallback

1st usecase: when we need to prevent un necessary re render of child component

when count is updated on parent component but the child component is re rendered un necessarily then we need to wrap the child with react.memo 

then the child will re render only when the props are changed so it will prevent re render

if you are sending a function then react.memo wont be able to save you from re rendering because when count value is updated in the parent it causes it to re render means the handleClick will be recreate again and hence reference changes and the child will think it is given  with new handleClick

now we want the callBack function to have constant one reference that doesnt changes 
for that purpose we will wrap the handleClick into a useCallBack body




2nd usecase: handling expensive operations to increase performance which matter in large scale apps where dom tree is larger we see significant performance upgrade there using prevention of function recreation

we will use useMemo code of expensive operation place it in new child component where we prevented rerun of function now we will prevent recreation


we memoize the function reference using usecallback but function still re runs 

if we want to memoize result and stop rerun then we use use memo


summary for second usecase: useCallback returns the same function reference across re-renders. useRef stores the previous reference so we can compare it with the current one after each render. if the references match, the function was memoized, if not, it got recreated because a dependency changed.