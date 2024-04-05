import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {

  return (
    <>
      <Header />
        <TodoList />
      <div className="absolute bottom-0 w-full">
          <Footer />
      </div>
    </>
  )
}

export default App
