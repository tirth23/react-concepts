import './App.css';
import Comp1 from './Comp1.js'
import JsxComp from './Components/jsxComp.js';
import Counter from './Components/Counter.js';
import Namelist from './Components/NameList.js';
import Productlist from './Components/Productlist.jsx';
import Classcomp from './Components/Classcomp.jsx'
import Lifecycledemo from './Components/Lifecycledemo';
import UseEffectDemo from './Components/UseEffectDemo.js';
import UseMemo from './Components/UseMemo.jsx';
import UserComp from './Components/UserComp.jsx';
import Postlist from './Components/Postlist.js';

//if exported as default, no {} required and can be imported by newmsgname directly inplace of Citylist as any alias name
import Citylist from './Components/Citylist.jsx';

//if exported without default need {} for import and can be imported by {msg as newmsgname} as any alias name
import { msg } from './Components/UserComp.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  let isrender=true;
  return (
    <div>
      <h1>Welcome to React Session</h1>
      {/* Comp1({msg:"Hello world",country:"india"}) */}
      {/* <Comp1 msg="Hello world" country="india" />  */}
      {/*Comp1({msg:"Hi everyone!!"}) */}
      {/* <Comp1 msg="Hi everyone!!" country="usa" /> */}
      {/* <JsxComp/> */}
      {/* <p>rating:<Counter max="5" min="0"/></p> */}
      {/* <p>quantity:<Counter max="10" min="0"/></p> */}
      {/* <Namelist/> */}
      {/* <Productlist/> */}
      {/* <Classcomp msg="Hello" /> */}
      {/* {isrender?<Lifecycledemo info="Hi"/>:""} */}
      {/* <UseEffectDemo/> */}
      {/* <UseMemo/> */}
      {/* <UserComp/> */}
      {/* <Postlist/> */}
      {/* <Citylist/> */}
    </div>
  );
}

export default App;
