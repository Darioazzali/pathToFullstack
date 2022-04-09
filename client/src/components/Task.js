import React, { useEffect, useState } from 'react'
import 'regenerator-runtime/runtime'
import {fetchAllData, fetchData, fetchDelete, fetchUpdat, fetchUpdate} from './auxFunction/auxFunctions'
import './Task.css'
import {BsFillTrashFill ,BsFillPenFill} from 'react-icons/bs'
function Task(props) {
const changed = props.changed;
const setChanged = props.setChanged;
const [elenco, setElenco] = useState([])
const URI = 'http://localhost:3000/api/clitotem';
const setColor = props.setColor;
const setAddress = props.setAddress
const isUpdating = props.isUpdating;
const setIsUpdating = props.setIsUpdating
const updatingId = props.updatingId
const setUpdatingId = props.setUpdatingId
 useEffect( ()=>
 {

fetchAllData(setElenco,URI)
}
,[changed])



function handleDelete(id){
  async function fetchDelete (){
    const settings = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    };
    const response = await fetch(URI+'/'+ id, settings);
    setChanged(!changed);
    }
console.log("Deleting id:", id); 

} 


function handleUpdate(id){
  console.log("Updating id:", id); 
async function fetchData () {
  const data = await fetch(URI+'/'+id);
  const response = await data.json();
};
setIsUpdating(true);
setUpdatingId(id)
fetchData();
} 


  return (
    <div className="container-tasks">
      <h1>Orders</h1>
      <ul> 
          {elenco.map((element) => {
            return (
              <div
                className={
                  (isUpdating && element._id === updatingId)
                    ? "li-container-act"
                    : "li-container"
                }
                key={element._id}
              >
                <li>
                  <p>
                    Address: {element.address} <br /> Color: {element.color}{" "}
                    <br />
                    Type: {element.type}
                  </p>
                </li>
                <div className="icone">
                  <BsFillTrashFill
                    onClick={() => {
                      handleDelete(element._id);
                    }}
                    style={{ fill: "white" }}
                  />
                  <BsFillPenFill
                    onClick={() => {
                      handleUpdate(element._id);
                    }}
                    style={{ fill: "white" }}
                  />
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default Task