// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') || initialName,
  )
  //Above is the lazy state initialization Extra Credit. This uses an arrow function to return the localStorage upon the first time the component is rendered. useState allows you to pass a function instead of the actual value, and then it will only call that function to get the state value when the component is rendered the first time.

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰

  //initialName is set to an empty string initially
  //useState: get name item out of localStorage, or if there is none, then get initialName
  //useEffect will be called upon first render, and anytime the component re-renders (like if state changes) the useEffect will run again.
  //useEffect synchronizes the state of the world (localStorage) with the state of the application (the name value)
  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
