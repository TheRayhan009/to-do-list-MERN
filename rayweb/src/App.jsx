import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './components/header';
import TodoApp from './components/main_todo_list';


export default function App() {
  return (
    <>
      
      <Header />
      <TodoApp />
      {/* <Foote/> */}

    </>
  )
}

// export default App
