import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Task from "./components/Task";
import {useState} from 'react'
import('./App.css')

function App(){

const [address, setAddress] = useState("Address");
const [color, setColor] = useState("#ffffff");
const [type, setType] = useState("Cat");
const [changed, setChanged] = useState(true);
const [updatingId,setUpdatingId] = useState(0)
const [isUpdating,setIsUpdating] = useState(false);
    return (
      <div>
        <NavBar />
        <div className="form-container">
          <Form
            address={address}
            color={color}
            type={type}
            setAddress={setAddress}
            setColor={setColor}
            setType={setType}
            changed={changed}
            setChanged={setChanged}
            updatingId={updatingId}
            setUpdatingId={setUpdatingId}
            isUpdating = {isUpdating}
            setIsUpdating = {setIsUpdating}
          />
          <Task
            changed={changed}
            setChanged={setChanged}
            setAddress={setAddress}
            setColor = {setColor}
            setType = {setType}
            updatingId={updatingId}
            setUpdatingId={setUpdatingId}
            isUpdating = {isUpdating}
            setIsUpdating = {setIsUpdating}
          />
        </div>
      </div>
    );
}

export default App;