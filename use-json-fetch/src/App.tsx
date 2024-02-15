import './App.css'
import { DrawAxios } from './components/DrawAxios'

function App() {
  return (
    <>
      <DrawAxios url='http://localhost:7070/data' name='Data'/>
      <DrawAxios url='http://localhost:7070/error' name='Error'/>
      <DrawAxios url='http://localhost:7070/loading' name='Loading'/>
    </>
  )
}

export default App
