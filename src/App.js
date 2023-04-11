import "./index.css";

function App() {
  return (

      <form className="flex justify-center items-center">
        <div className="bg-red-500 flex-col">
          <label htmlFor="item">New item</label>
          <input type="text" id="item" className="bg-tahiti border-2 "></input>
        </div>
      </form>
  );
}

export default App;


