import React, {Fragment, useState, useEffect} from 'react';
import InputDeed from "./components/InputDeed";
import ListDeeds from "./components/ListDeeds";
import './App.css';

function App() {
  const [deeds, setDeeds] = useState([]);

    async function getDeeds(){
        const response = await fetch("http://localhost:3440/deeds");

        const deedArray = await response.json();
        console.log(deedArray);
        setDeeds(deedArray);
    }

    useEffect(()=>{
        getDeeds();
    }, []);

    const deedAdded = (newDeed) =>{
      setDeeds([...deeds,newDeed])
    }

  return (
    <Fragment>
      <div className="container">
        <InputDeed onDeedAdded={deedAdded} />
        <ListDeeds deeds={deeds} />
      </div>
    </Fragment>
  );
}

export default App;
