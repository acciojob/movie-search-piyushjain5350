import React,{useState} from "react";
import "./../styles/App.css";
import SearchBar from "./SearchBar";
import Display from "./Display";

const App = () => {
  const [data,setData]=useState('');
  return (
    <div>
      {/* Do not remove the main div */}
      <SearchBar/>
      {/* <Display  data={data}/> */}
    </div>
  );
};

export default App;
