import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Movies from './components/Movies'
import 'bootstrap/dist/css/bootstrap.css';



function App() {
    return (
        <>
            <ChakraProvider >
                <Movies />
            </ChakraProvider>
        </>
    )
}

export default App
