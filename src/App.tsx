
import './App.css'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Menubar } from './components/ui/menubar'

import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Nav";

function App() {
  

  return (
    <>
      <div>
        This is my new app
      </div>
      <Button>This is my button</Button>
      <Card>This is my card</Card>
      <Menubar></Menubar>
      <Nav></Nav>

    </>
  )
}

export default App
