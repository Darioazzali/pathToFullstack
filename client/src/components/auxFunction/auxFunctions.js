
import { BsArrowRepeat } from 'react-icons/bs';
import 'regenerator-runtime/runtime'
export async function postData (uri, data ){
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(data)
  };
const fetchResponse = await fetch(uri, settings);
  const resp = await fetchResponse.json();
}

export const fetchResponse = 
 fetch("/api/clitotem")
   .then((response) => response.json())
   .then((data) =>{return data;});
 

   //Function prototype for fetch data from my API
   //First argument is the funcion that is to be executed
   //Second one is the uri to fetch
export async function fetchAllData (fun, uri) {
  const data = await fetch(uri);
  const response = await data.json();
  fun(response);
};

export async function fetchData () {
  const data = await fetch(arguments[0]+'/'+arguments[1]);
  const response = await data.json();
  let myArray= [0]
  for (const prop in response) {
    myArray.push(response[prop])
  }
  console.log(myArray);
for(let i=2; i< arguments.length;i++){
  arguments[i](myArray[i]);
    }
};

  export async function fetchDelete (uri, id){
    const settings = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    };
    const response = await fetch(uri+'/'+ id, settings);
    }
  


  export async function fetchUpdate (uri, id, data){
    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(uri+'/'+ id, settings);
    console.log("Updated ",response.json());
    }