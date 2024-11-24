import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
       
       <div className='sidebar'>
       <Sidebar />
       </div>
    <div className='main'>
    <Main/>
    </div>
   
    </div>
  );
}

export default App;
