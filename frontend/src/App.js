import React from "react";
import "./index.css";

function handleSubmit(e){
  let values = document.getElementsByClassName("form-field");
  e.preventDefault()

  let data = {
    name: `${values[0].value}`,
    phoneNumber: `${values[1].value}`,
    email: `${values[2].value}`,
    date: `${values[3].value}`
  }

  fetch('http://localhost:5000/form', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log(data.message);
  handleSuccessfulSubmission(data.message);
})
.catch((error) => {
  console.error('Error:', error);
});

}

async function handleSuccessfulSubmission(status){
  console.log(status);
  if(status != "The form is submitted"){
    document.getElementById("status-block").style.backgroundColor = "#edbfbf"
  }
  document.getElementById("status-block").textContent = `${status}`;

 setTimeout(function(){
  document.getElementById("status-block").textContent =  ``
  },3000)
 
}

export default function App() {
  
  return (
    <>
     

    
<div class="form-container">
 
 <div id="status-block">
   
  </div> 
<div class="title">
       Appointment Form
     </div>
  <form class="register-form">
    
    <input
      id="name"
      class="form-field"
      type="text"
      placeholder="Name"
      name="Name"
    />
   
    <input
      id="phone_number"
      class="form-field"
      type="text"
      placeholder="Phone No."
      name="phoneNumber"
    />
   
    <input
      id="email"
      class="form-field"
      type="text"
      placeholder="Email"
      name="email"
    />

    <input
      id="date"
      class="form-field"
      type="date"
      placeholder="Date"
      name="date"
    />
    
    <button class="form-field" type="submit" onClick={handleSubmit}>
      Submit
    </button>
  </form>
</div>
    </>
   
  );
}
