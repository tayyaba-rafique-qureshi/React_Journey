# useEffect: Part 2 Advanced

Practicing different useEffect variations learned in useEffect Part 1, each component covers one use case.

LoggerComponent: runs on every render, no dependency array
TimerComponent: runs once, starts a timer, cleans up on unmount
DataFetcher: fetches posts from an API on first render only
ResizeComponent: attaches a resize listener, removes it on unmount
MultiEffectComponent: two useEffects in one component, one watches count, one runs a timer

Key thing learned: the return function inside useEffect is the cleanup. Always clean up intervals and event listeners or you get memory leaks.