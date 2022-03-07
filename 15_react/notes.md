npx create-react-app my-app
cd my-app
npm start

install react-router-dom

Is react a MVC or MVVM?
React isn't an MVC framework.

React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time.

prop is the mechanism that moves data from parent to child

index.js is where wrappers sit, also where the react is being connected to html

named export - need to destructor it -

rfce - short cut for creating component boilerplate

when importing {} are used for named exports
for default you dont use

props.dataName

props is an object
so you can dive down into it
props are a way to bring data from parent to child

context api - props drilling

shadow coding - Practice telling your friend what are you doing with you code, - friend can be whatever

Strict mode - runs ??

react is unidirecitonal - pass data through parent to child

react only changes what is different.. only update differences.
shadow dom
virtual dom

State and lifting State

JESUS STATE DEMO NOTEs

State is data is variable and can change at any time

Where do we keep the state of certain things?ls

ls -a shows all including

to avoid a repo within a repo situation - look for the hidden .git
we can remove it
rm -rf .git

a hook - import { useState } from 'react'
Hooks have a pattern of "use" something

Naming convention for states

    const [] = useState()

two things come from the call, desturcturing out.. the state and the setter function
[num1, setNum1]

    event.preventDefault() this prevents the form from automatically refreshing

Whenever you want to to share state between sibling components you need to "lift the state"
refactor the state to the parent, estab lish the state the parent
lifting state to parent to share with sibling

Display({result}) is the same as let results = props.result

Underline idea of react ---- Change the state everything rerenders

checkout reactjs usereducer

Hook is a function, but runs at a specific time

Components life cyfcle -
Initializes
when refreshing the page
Mounts the dom
Updates the data after mount
unmounts
when job is done or switching to a different view
first component will unmount second will mount

Mounting?
in react is refers to the loading of components on the DOM

life cycle functions are used to do things at an appropriat time

render function is a pure method. That means it gives the same output the same input each time
hence we dont make the back end or externa api request here.

pure function ->

Stateless
after the exchange of information they do not remember each other

curl -X GET
makes a http request

A hook in react is special function that does a special job - hooks use useSomething for name
