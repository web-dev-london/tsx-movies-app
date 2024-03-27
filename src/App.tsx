import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Movies from './components/Movies'

function App() {
    return (
        <>
            <ChakraProvider>
                <Movies />
            </ChakraProvider>
        </>
    )
}

export default App
