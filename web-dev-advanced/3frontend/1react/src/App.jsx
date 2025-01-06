import Heading from "./components/Heading"
import Props from "./components/Props";
import { useState } from 'react';

function App() {
  {/*(1) Without Hooks useState
  const profiles = [
    {
      id: 1,
      name: "Edo",
      age: 25
    },
    {
      id: 2,
      name: "Anwar",
      age: 27
    },
    {
      id: 3,
      name: "Ridwan",
      age: 24
    }
  ];

  (2) With Hooks useState */}
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Edo",
      age: 25
    },
    {
      id: 2,
      name: "Anwar",
      age: 27
    },
    {
      id: 3,
      name: "Ridwan",
      age: 24
    }
  ]);

  return (
    <div>
      <Heading />
      {/*
      (1) Basic Props
      <Props name="Edo" age="25"/>
      <Props name="Anwar" age="27"/>
      <Props name="Ridwan" age="24"/>
      
      (2) Props with Loop
      {
        profiles.map((profile) => {
          let { id, name, age } = profile;

          return (
            <Props name={name} age={age} />
          )
        })
      }
      
      (3) Props with Loop and Profile  */}
      {
        profiles.map((profile) => {
          return (
            <Props prof={profile} />
          )
        })
      } 
    </div>
  );
};

export default App
