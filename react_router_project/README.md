first we saw how we use browser router to create routes
steps 
1. import  browser router
2. create routes
3. add contexts of routes to application using router provider
4. Once the routes were working fine Then we made navbar and added anchor links but anchor links reload the page but in react ecosystem their is concept of single page apps so we need to use Alternatives like Navlink and Link tags
5. first we used links and then shifted to navlinks to see how navlinks give us the properties like isactive to manipulate styling of objects


useParams 
-> in this part i leanred how the parameters are handled in the url using react and the difference between query parameter key = value and route parameter

useParams lets us access the route parameters

UseNavigation Hook
-> we imported and made a button on homepage to move to about page and wrote a handle click function that uses the navigate variable to reach the about page
then repeated same in other pages 


Nested Routing 
/dashbord/
/dashboard/course
/dashboard/mock-tests

used children fields in the same routes defined in app.jsx
we found if we want to render any child component we need to use outlet function 

in the end i handled not found using * path 