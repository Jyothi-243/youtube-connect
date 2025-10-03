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
3. when we click on the search result , then it has to show the results(in the search bar of the youtube project)
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

# **** in DSA , whenever there is a word circular in the problem , array, linkedlist try to double the array.  example: Next greater element-|| 
means if the array is [1,2,3,4,5,6] then try to double that [1,2,3,4,5,6,1,2,3,4,5,6]; //when we make the array as double then circular will be cancelled means normal array. 
Trick : when we see the circular then , we can use 2 approaches means (make the array as double and we can iterate the array  2 times without using the extra space) //1. doubling the array 2. doubling the indeces.  

# forgetting every time that, for the loops , i am keeping <= (instead of >=) while reversing the array. 

while doing the DSA , try to find out where we are missing means (issue in the approach or issue in the writing the code. )
// if we not able to build the logic , we have to improve on thinking and logc building. if we can able to write the code then we have to improve the coding skills. 


3-part of the youtube project: 
Building the infinite scroll, or live chat 
<!-- Live Chat >>>>> infinite scroll >>>>> pagination -->

# in js , we have somethings like , unshift (to remove from the top) splice(10, 1)(only 10 messages then we wil remove 1 from top) and slice(10,)
useRef(), useCallback(), useMemo() hooks. in yt project. 

if the basics are right nobody can challenge you . (basics are important).
useRef() : not needed for the rendering. react hook , that lets you reference a value thats not needed for rendering. 

for the setInterval() , we have to use the garbage collect that. means clearInterval also, otherwise it will run in background. 

YT project : 3rd video
infinite scroll means( when the page is scrolled then i want to show the some data means making the api call based on the scrolling.) 
Live Chat >>>> Infinite Scroll >>>> Pagination 

instead of hardcoding the api keys in our project , store the api key in a .env value(it will never commit to the github),we can use that in Github secrets 
usingg Secret Managers (Google Secret manager, aws secret manager, Vault)(these services manage and rotate keys securely). 

Challenges of live chat: 
-> to get data live . 
-> updation of the data on the page.  even the page is open for the 1 hour the page does not have to freeze. 
if the data in the live chat is not the live then we can call the useEffect and again we can set the data. 

Handling the Live data: 
1. Web Sockets, (web sockets is a 2-way connection , like handshaking between the server and the UI. so we can quickly send the data from either sides. it is bi-directional means we can send data from UI to Backend or Backend to UI also. as soon as we open the application , websocket connection is established. now we can send the data immediately from both sides.) (no interval) may be 0 milliseconds, 10 milliseconds, 10 minutes later. in websockets , intial connection takes time. and we can send the data any time we want. 
2. Long Polling or api polling. (UI requests the Backend and the data is send from the server.) (based on the regular intervals). (single way connection.) (uni-directional).      
G-mail is web-socket or Api Polling: Ans: Api Polling.  As we dont want the Gmail is very real-time , getting the email after 10secs is also fine. 

while implementing this , we have to ask some Questions, like 
the moment we get the email, we have to send the mail to the receiver ? or not ? after 10 secs also getting the email is fine. so we can do api polling for the G-mail kind of thing

if the application like stock market (live-trading platform) then we need the web-sockets. (because we need to be very close to real time) because things can change with in milliseconds. 

If the application like whatsapp , then we need the real-time data(we use web-sockets)

Cricbuzz(cricket commentary system)(it will use api polling because , for every batting, it will take some secs of time.so we can use 25secs of time between the api polling.it is kind of aligning to the cricket.we can see the what is happening in the console, so that we can understand what is happening in the console. )

Soccer(commentary for soccer, still do the api polling with less seconds because even for the writing the comments it will take time.)(this will help you in the system Design interview.)

Youtube live Chats( uses api polling )

Most of the times, code is the easiest part of building an application. once we understand the concepts , we can write the code very easily. (so focus up on the core concepts.) youtube is making the api calls for every 1.5 secs for the live-chat.  we can do this for every 5 secs also, but youtube want to do this live-time. while chat order doesnot matter. 

staff-engineers will do this stuff of live-chat like that , so they will manage the things().they do the best optimization for the application(after the tech-lead , we have the 2 postions and after that staff-engineers will be there.)

in the live-chat of youtube , page is not freezing, because YT has implemented , as the messages reach the certain limit they will remove the messages from the top. it will clean up the mess itself. like after reaching the 100 or 200 messages, it will clean up the messages. 

we have the document.getElementByTagName("tag_name"). After a while Youtube removes the messages from the top. 

while coding do it step-wise not write the code by using map directly. 
we have to write the code like when we write the code , we have to know that when we open the webpage. 

whenever we are doing the setIntervel then we have to clean the garbage also , means we have to use the clearIntervel also. 

write the notes for the creating a slice and their usage. in redux for the chatSlice.js file. and adding that slice to the store. and note how the useDispatch and subscribe will be written and their syntax. 

dispatch(addMessage({
                name: generateRandomNames(),
                message: "this is the live chat from the redux store 🚀",
})) //here we are calling the function for generating the random names.


while building the live chat the new messages have to come down so that old message have to be in top. 
so in the array when we push it has to go in the front. and not the last (push in the first) //example : state.messages.unshift(action.payload)

when there is no limit , then the page will get freeze in the live chat , so we have to set the limit for the page not to get freeze.

splice(length, count) //takes 2 parameters, 1. length (to keep the length for the list) 2. count (to remove the count from the top of the list) 
splice(10,1) //keeps the 11 messages in the list and removes if exceeds 11 and from the top, it removes

know about the retry - mechanism in the kafka, and the sqs messages.  based on the count we retry the mechanism, we have to retry for the mechanism. 

why when we submit the form , we have to prevent the preventDefault() for the form and read about the preventDefault. 


# webrtc, l3 websockets,  kafka 

onscrolleent() make the api call and to build infinite scroll. we will keep all the videos in the redux store and then on appending on our redux store and keep the offset. 

part-4: 
react hooks : useState and useEffect hooks are most used hooks.  
useParams(given by react-router) and useSearchParams , useContext 
 
## useMemo caches the value. 
useMemo is the React hook that lets you cache the result of a calculation between the re-renders.  (means any expensive operation.)
when does my component re-render ? Ans: When i update my State. 

why strictMode is used ? in react . (in dev mode and production mode).

we can memorize the heavy operation while re-renders. for this we use useMemo() 
example : calculating the 7-digit prime number , and for render it is calculating (we want to stop those, and when to to toggle the bdark and light theme then we want to calculate the prime number for every render.)


we want to memorize the value return from the function is , 
usage:  useMemo(()=>functionName(text), [dependencies]);  //here it will memorize the result from this function. it will take dependencies also. it will memorize this and only changes when the value changes.
--> It will caches the results between re-renders until the dependencies changes. 

the problem with react is it re-renders the component anytime the state variable changes or any prop changes. 

--> for every browser tab, chrome allocates the memory. if any tab frozes then it dont affect the browser(whole chrome).if the component lagging then memorize the value or component. 

# useCallback() hook: useCallback() is a react hook that lets you cache the function definition between the re-renders. 
usage: const cachedFn = useCallback(function, dependencies)

# useRef() , a react hook that lets you reference a value thats not needed for rendering. 
const ref = useRef(initialValue); //we want the value in a variable but we dont want the component to re-render. here we can use the const variable also but when we want to update then we use useState only so component will re-render but we dont the re-render while changing.  we have to use like we want to change the value but dont want to re-render. 

# while developing anything , we have to think like why we have to use this not like how to use this.  

usage for the useRef(), 
for the state variables , the value would be updated and it will re-render also. 

--> whenever the component re-renders it will refreshes my let value.
while learning , we have to have some curosity. 

<!-- # if the basics are right then nobody can challenge/defeat us -->

when we have the let , what is the need of the state variables? because for the state variable value changes and component also re-renders. 

useRef # i want the variable which should not get reset when my re-render happens but it holds that value still, react should track it. 

dont use short cuts. 

ref is like an object. 

<!-- not like => ref = 0 
like ref = { current: 0 } --> //instead of the value, when we created the useRef it comes as an object, with the current hard-coded in that. so 
that's why we can print the console.log(ref) , we have to print like the console.log(ref.current) 
when we want to update the the ref value then we dont have the set function for this.

we have to update this like , onClick= {()=>{
  ref.current= ref.current+1;
}}
// and when the component re-renders then only updated value will appear in the UI. 
<!-- for the random values, we can use Math.random() -->

when we use the setInterval() then we have to use the clearInterval in the  return function of the useEffect (return will run when the componnet unmounts.)