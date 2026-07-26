# useRef Hook

Two use cases of useRef:

1. Persisting values across re-renders
regular variables reset to their initial value on every render. useRef gives you a box that survives re-renders without triggering a new one.
changing val.current never causes a UI update.

2. Direct DOM manipulation
create a ref, attach it to an element using the ref attribute, then manipulate it directly through ref.current — no need for getElementById like in vanilla JS.

steps: 
create ref → link to element via ref={} → manipulate via ref.current