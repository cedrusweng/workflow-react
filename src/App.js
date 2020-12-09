
import './App.css';
import React, {Context} from 'react'
import data from './data.json'
// import StartNode from './components/StartNode'
// import ApproverNode from './components/ApproverNode'
// import NotifierNode from './components/NotifierNode'
// import BranchNode from './components/BranchNode'
import EndNode from './components/EndNode'
// import ConditionNode from './components/ConditionNode'

import WorkFlow from './components/WorkFlow'



const config = data.data.nodeConfig
console.log(config)
function App() {
  return (
    <div className="App">
      <WorkFlow config={config} />
    </div>
  );
}

export default App;
