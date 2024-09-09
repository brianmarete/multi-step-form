import PersonalInfo from "./components/personal-info";

function App() {
  return (
    <div className="bg-light-blue h-screen flex justify-center items-center">
      <div className="flex h-3/5 w-[55%] bg-white rounded-lg shadow-md p-3">
        <div className="sidebar w-1/4 h-full rounded-md"></div>
        <div className="form w-3/4 h-full px-20 py-8">
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
