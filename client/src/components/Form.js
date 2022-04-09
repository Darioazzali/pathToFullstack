import './Form.css'
function Form(props) {

const {address, color, type, setAddress, setColor, setType, changed,setChanged} = props; //Destructuring props
const isUpdating = props.isUpdating;
const setIsUpdating = props.setIsUpdating
const updatingId = props.updatingId
const setUpdatingId = props.setUpdatingId
const URI = 'http://localhost:3000/api/clitotem'

//Handleclick, handle the clicking button behaviour
const resetForm = () =>{
  setAddress ("Address");
  setColor("#ffffff");
  setType("Cat");
}
const handleClick = (e) => { 
  e.preventDefault();
const newForm = {
  address,
  color,
  type,
};
if (address === "" || color === "" || type === "") {
  alert("There is an empty field, check on and send again");
  return;
}

if (isUpdating) {
 const fetchUpdate = async () => {
   console.log("Newform", newForm)
    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    };
    const response = await fetch(URI + "/" + updatingId, settings);
    console.log("Updated ", response.json());
  setIsUpdating(false);
  resetForm();
  setChanged(!changed)
  
} 
fetchUpdate()
}
 else {
async function fetchPost () {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    };
    const fetchResponse = await fetch(URI, settings);
    const resp = await fetchResponse.json();
    setChanged(!changed);
  }
  fetchPost();
}}


  return (
    <form className="container-form">
      <div>
        <div>
          <label>Address</label>
        </div>
        <div className="address-field">
          <input
            type="text"
            placeholder="Type your address"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <label>Color </label>
        <input
          type="color"
          value={color}
          name="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <p>Type</p>
        <div className="Mylist">
          <select
            name="clippType"
            id="clippType"
            onChange={(e) => setType(e.target.value)}
          >
            <optgroup label="Cats">
              <option value="Cat">Cat</option>
              <option value="Tiger">Tiger</option>
            </optgroup>
            <optgroup label="Star wars">
              <option value="Stormtrupper">Soldier</option>
              <option value="Darth Wader">Darth Wader</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="btn">
        <button type="button" onClick={handleClick}>
          {isUpdating ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default Form

