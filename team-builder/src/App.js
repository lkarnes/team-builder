import React, {useState} from 'react';
import logo from './logo.svg';
import Form from './Form.js';
import TeamList from './TeamList.js'
import './App.css';

function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();
  function addNewMember(member){
    setTeamList([...teamList, member])
    console.log(teamList,'<teamlist', member, '<member')
  }
  function edit(member){

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Team List</h1>
        <TeamList list={teamList} edit={edit}/>
        <Form addMember={addNewMember} memberToEdit={memberToEdit}/>
      </header>
    </div>
  );
}

export default App;
