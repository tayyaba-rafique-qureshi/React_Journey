#Use Context Hook

1. Prop Drilling: 

Parent comp has many child comp used in parent and childs also have their children component making a hierarchy, lets say parent wants to send a prop and only c5 wants to access it then what should we do, sending data to the parent of c5 but the parent of c5 doesnt need that data but we forcefully send it, we need to have a direct communication 

we use usecontext hook or api to do this in 3 steps
1. create context in parent or in seperate file
2. provide context in parent (provider of data)
3. consume context  by child