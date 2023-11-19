import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import MarkCompleted from './components/MarkCompleted';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  function collectName(event) {
    setName(event.target.value);
    // console.log("Name collected " + name);
  }
  function collectEmail(event) {
    setEmail(event.target.value);
    // console.log("Email collected " + email);
  }
  function addData() {
    setData([...data, { name, email }]);
    setName('');
    setEmail('');
    // console.log("Button is clicked")
  }
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);//spread operator
  }
  const handlePress = (event) => {
    if (event.key === 'Enter') {
      addData();
    }
    console.log(event.key);
  }
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="boxie">
        <div className='BodyContainer'>
          <p style={{ margin: 'auto', width: 'fit-content' }}>Enter the task name</p>
          <input onKeyPress={(event) => handlePress(event)} type="text" value={name} onChange={(collectName)}></input>
          <p style={{ margin: 'auto', width: 'fit-content' }}>Enter the task detail</p>
          <input onKeyPress={(event) => handlePress(event)} type="text" value={email} onChange={(collectEmail)}></input>
          <button onClick={(addData)}>Add</button>
          <div className="datawrap">
            <div className='datashow'>
              <h4>Task Name</h4>
              <h4>Task Detail</h4>
              <h4>Mark as Completed</h4>
              <h4>Delete Task</h4>
            </div>
          </div>
          {
            data.map((element, index) => {
              return (
                // <Feild key={index} name={element.name} email={element.email} index={index} />
                <div>
                  <div className='feilddatashow' key={index}>
                    <div className='name'>
                      <h4>{element.name}</h4>
                    </div>
                    <div className="email">
                      <h4>{element.email}</h4>
                    </div>
                    <MarkCompleted />
                    <div className='removebtn'>
                      <button onClick={(_) => removeItem(index)}>Delete</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>


  );
}

export default App;