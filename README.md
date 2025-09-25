## My Learnings ## : 
# Requirements and clarification : (5 minutes) //high-level design
Step 1 : Features to build in project : 
Step 2 : tech stack , (react , tailwind, js/ts , useContext/Redux , 
Proper justification for every thing that is used in the project 
If the app consists of forms (then using formic or other library)
React router Dom for Routing ,)
→Bundler , Testing library(jest) ,  
→Can we do google Search or not ? (but dont use) 

# Planning the things: (5 minutes) //high-level design (to be in same track , we have to discuss what we are going to build) // we have to tell our approach 
→ and planning the components (means body, header, video container , video component , sidebar component) 

# For creating the react app , 
Command : # npx create-react-app Namaste-Youtube # (executing the create-react-app package )//js package or library. 
 
—> npx package Name_of_react_app (syntax of the top)

 # why reportWebVitals used ? 
reportWebVitals.js is used to measure your React app’s performance (like speed and user experience) and send those results to logs or analytics.

# <React.StrictMode/> 
React.StrictMode is used in development to find bugs and highlight unsafe code practices.
It doesn’t impact production, but helps you write cleaner and future-proof React code.

# setting up tailwind (create-react-app takes care of the postcss)
1. npm i -D tailwindcss 
2. config: npx tailwindcss init (it will initailize with the tailwind.config.js)

Create the structure and after that , 
create Components folder in the src folder 

rafce for the boiler plate code for the components.

# installing Redux Store:  (toolkit and react-redux)
npm i @reduxjs/toolkit and 
npm i react-redux

# configureStore (for the store.js file )
as the reducers are the functions , we have to write the arrow functions for the reducers. 
1. configure the store, 
2. create the slice,
3. provide the store to the app.
4. to check whether the redux store is properly configured or not we can check in react dev tools extension. 
# const isMenuOpen = useSelector((store)=>store.app.isMenuOpen); //subscribing to the store.


  &:hover{
        cursor :pointer;
    }

# Scrollable bar for the buttons list in the youtube. (css thing to build) //home work , 
1. for the watch page create the like share subscribe buttons like that.
2. if we click on the search result then it has to shows the results like youtube.

# youtube video api , youtube api key auth (for the key and credentials) //
--> in that page , we have the credentials page(link) ,

# Difference between axios and fetch (handling json)
there is no performance issues with the fetch , they work same in functionality(axios internally uses fetch()) and performance.
# not using data.json()   imp **
--> we have to enable the option for the youtube api.

# when we have to write the map then , first we have to check for the one component and if works then use for the all other components. 
# Make it work for once then scale it. (key principle).

# we have to give so many interviews then we will know more things. 

# we have to destructure the all values , before using the values.


# for setting up the routing : 
1. command : npm i react-router-dom
2. we create the app Router , using createBrowserRouter  in app.js 
3. createBrowserRouter takes array of Objects [{}] ,path, element. 

//where ever we will give the appRouter, RouterProvider will render there. and children will go where ever this Outlet is there. 

# using useParams(), 
these are search params "http://localhost:3000/watch?v=ziM_K-n6svk" not the /(slash params)

we have useSearchParams also(for search params) , like the useparams for the / (slash params)

useParams → for path variables in the URL. 👉 Example: /users/123 → useParams() gives { id: "123" }.
useSearchParams → for query parameters in the URL. 👉 Example: /search?keyword=react → useSearchParams() gives keyword = "react".

# console.log(searchParams.get("v")); //search params will give the get method and "v" is the key here. 

--> iframe in the watchpage , and for the errors (we have to use like watchPage(camelCase))  //making this feature ,
and make the api call for the video based on the id. and comments api , load comments , most popular videos, videos at right side. 


# prefix sum , suffix sum. # DSA


### Advanced Features in Youtube Project 

# higher order components (a component which takes a component and returns a new component)

Search in project : while searching in the any app , it will make the api call. 
# Debouncing:
based on the speed of the typing while searching , some events are skipped. 
//making the api call for every key stroke. 
typing slow = 200ms;
typing fast = 30ms;

Debouncing with 200ms means, 
-if difference between 2 key strokes means is less than 200ms -DECLINE the API call.
-if greater than 200ms make an api call.(show the results).

In Google, (google search suggestion api) in stackoverflow and see the link for this (enter the search inplace of the searchKey)
// youtube suggestions search api 

# while converting the api call data to json , we have to write this 
const json = await data.json(); //fetch() will return the promises  and we have to wait for the server response.

for the every 200ms we are doing the api calls. in debouncing (search in codebase in input of header component.) whenever we are writing the setTimeOut() then we have to clear the interval otherwise performance issues.   

# removing the cache for the same file/scanner object selection in scanner thing.

Debouncing in js (yt video) is very tough but doing the same react is very easy by using useEffect.  

setTimeout(()=> method(),3000) //setTimeout takes 2 params (callback function, time in milliseconds)
//position fixed (so it will overlap on the content ) ,position absolute so that it will be on the only parent component. 

# return function in the useEffect is called when the component is unmounted. 

# make the project as responsive(for all devices) and do the things and practice and build new features in yt project()
# and make the watch page as the one video api call and show that youtube video and built the screen for the comments and the popular videos based on the search also.

while removing the entered text then it dont have to make the api call.(means building the cache) means using redux cache.  means based on the search query it has to get the data from the cache or make the api call. 

//for caching the things we use the redux cache(while searching we can make the cache inside the redux store)

# cache
time complexity of searching in an array  = O(n); //array.indexOf(val), array.includes() //time complexity is O(n) for includes() and indexOf()

# the search complexity in an object ,hashmap, map , new Map();
in Object ,{} it will take the O(1). (very efficient).

# properly check the searching logic in the search bar .

# LRU cache (Least Recently Used) , we can restrict our cache to store only [100] keys. when it is increases then start removing from the front.like using the fifo (queue)

# n-level nesting (in reddit we have that we have to built that.)


for the sets , we add the element and for the arrays , we push the elements 
  let newSet = new Set();
  let newArray = [];
if (!newSet.has(arr[i])) {
      newSet.add(arr[i]);
      newArray.push(arr[i]);    
  }


for checking the trimmedValue is not empty string or not a string 
    if (trimmedval === "" || isNaN(Number(trimmedval))) {
      setResult("Please enter a  valid number");
      return;
    }
//Converting the string to number in JS 
    let num = Number(trimmedval); //here trimmedval is string. 
we can write the console.log("The number "+num+" is even); 
(`the number ${num} is even`);//using the template literal.The backticks ` ` → create a template literal (ES6 feature).${num} → inserts the value of the variable num directly inside the string.

# for the switch case , we have to show the case, break and syntax for this. 
# for the counter application , 
        setCounterValue((prev) => prev + 1); (prev-1)  for the decrement.

# flatten Nested Array
Array.isArray() → checks if an element is an array.
concat() → combines arrays without modifying the original array.  

Show a value temporarily in React:

1. Use state to store the value and visibility (useState).  
2. Use setTimeout(() => setShow(false), 2000) to hide it after 2 seconds.
3.       navigator.clipboard.writeText(inputValue); *** (navigator.clipboard is a built-in browser API for interacting with the system clipboard.
writeText(text) is a method that copies the provided text to the clipboard.
inputValue is the text we want the user to copy.)

short cut for : To go to a specific line number in a file in VS Code, use the "Go To Line" command. # (Ctrl+G) and enter the line number and press enter or (ctrl+p and enter the **:number**)

DSA Questions : 
power of two , three, four(using recursion)

# trimmedValue = inputColor.trim().toLowerCase(); //in react app, 
export const colorNameToHex = (name) => {
  return colors[name.replace(/\s+/g, "")];
};
for the component starts with the Capital letter. and returns the JSX code only return <div></div>
# Without const or let, JavaScript will create a global variable (bad practice, can cause bugs).

Building the nested comments in yt project:
(youtube reply section is 2 level nesting.) 

<!-- give the border-radius while making the any styling. -->
when we have to redirect to another page with the same domain then (self, target(self page, new page)), we have window.open method(means properly know this).
means which method will be used.

see the code for the return statement , 
const CommentList = (comments) => {
    return comments.map((comment) => (
        <Comment data={comment} />
    ))
}

