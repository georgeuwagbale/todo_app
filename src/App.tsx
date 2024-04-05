import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Todo from "./components/Todo.tsx";

function App() {

  return (
    <>
      <Header />
        <Todo />
      <div className="absolute bottom-0 w-full">
          <Footer />
      </div>
    </>
  )
}

export default App
