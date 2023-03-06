const form = document.getElementById("myForm");
const inputName = document.getElementById("name");
const inputDesc = document.getElementById("desc");
const inputJobProfile = document.getElementById("job");


async function getActiveTabURL() {
  const tabs = await chrome.tabs.query({
      currentWindow: true,
      active: true
  });

  return tabs[0];
}
const sendMessage = async(type,value) => {

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type : type ,value: value });
  });
}
const askForFormData  =async () =>{
 await sendMessage("getFormData","NULL");
}

askForFormData();


chrome.runtime.onMessage.addListener(function (obj, sender, sendResponse) {
  const {type,value} = obj;
  if(type=="formaData"){
    if(value!="NOT FOUND"){
      inputName.value = value.name;
      inputDesc.value = value.desc;
      inputJobProfile.value = value.job;
    }
 
  }
});





// Add an event listener to the form's submit event
form.addEventListener("submit",async function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the input field values
  const nameValue = inputName.value;
  const descValue = inputDesc.value;
  const jobValue =  inputJobProfile.value;
  // Create an object to store the data
  const data = {
    name: nameValue,
    desc: descValue,
    job : jobValue
  };
  
  await sendMessage("setLocalStorage",data);
  
  
});