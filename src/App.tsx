import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {

  return (
    <>
      <Header />
        <TodoList />
        <Footer />
    </>
  )
}

export default App
