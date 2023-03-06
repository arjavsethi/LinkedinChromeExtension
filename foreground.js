// import { generateMessage } from "./utils/generateMessage.js";
//genearate propmpt
const generatePrompt =(messageHistory) => { 
  const storedData = localStorage.getItem("formData");
  const data = JSON.parse(storedData);
  var prompt = `I am sharing the conversation between ${data.name} and other guy (it is in text format and is chat between them).About ${data.name}   "${data.desc}" and his job role is ${data.job}.
Please write the appropriate message Arjav should send  (directly give desired message)  . Also do not add this type of format in your response (${data.name} sent the following message at 9:43 AM
View Arjav's profile
Arjav Sethi  9:43 AM). I am using your response directly into my application only give message in your response not extra information .
Message = "
${messageHistory}
"
Pleage reply with message
`
return prompt;
}  
const apiCall = async(prompt,apiKey) =>{
  const response = await fetch('https://api.openai.com/v1/completions',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      "prompt": prompt,
    "model": "text-davinci-003",

"temperature": 0.7,
"max_tokens": 256,
"top_p": 1,
"frequency_penalty": 0,
"presence_penalty": 0
    })
});
return response;
}
const generateMessage = async(messageHistory,element) =>{
  var message ;
   const apiKey = "Your Api Key";
   const prompt = generatePrompt(messageHistory);
   const response = await apiCall(prompt,apiKey).then(response => response.json())
        .then((data) =>{
          element.innerText = data.choices[0].text;
          console.log(data.choices[0].text)
         })
        .catch(error => console.error(error));
        // console.log(response)
        // const data = JSON.parse(response)
        // console.log(data)

        // console.log(message)
        // return message;
}




// create the image element
const img = document.createElement("div");
img.src = "";
img.alt = "";
img.id = "messageOpenai";
img.style.cursor = "pointer"; // make the cursor change on hover
img.style.position = "absolute";
img.style.top = "15px";
img.style.left = "15px";
img.style.minWidth = "10px";
img.style.minHeight =  "10px";
img.style.borderRadius =  "50%";
img.style.background= "red";
img.addEventListener("click", myFunction); // attach the click event listener



// the function to be called on image click
async function myFunction() {
  // do something
 
  popupContainer.style.display = 'block';
  var events = document.getElementsByClassName("msg-s-message-list__event clearfix");
  var message = "";
  for (var i = 0; i < events.length; i++) {
    message += events[i].innerText.trim();
    message +="\n"
  }
  console.log(message);


let element = document.querySelector("#messageList");
element.innerText = "";
 await generateMessage(message,element);
 element.addEventListener("click",()=>{
             // Evaluate the XPath expression
const xpathExpr = "/html/body/div[6]/div[3]/div[2]/div/div/main/div/section[2]/div[2]/form/div[3]/div/div[1]/div[1]/p";
const result = document.evaluate(xpathExpr, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

// Check if an element was found
if (result.singleNodeValue) {
  const element2 = result.singleNodeValue;

  // Change the inner text
  element2.innerText = element.innerText;
}
closeButton.click();
 })







}

// Using set-timeout need to find better solution 
setTimeout(function() {
    // Code to be executed after 3 seconds
    const parentDiv = document.querySelector('.msg-form__msg-content-container--scrollable.scrollable.relative');

    // insert the image element inside the parent div element
    if (parentDiv) {
      parentDiv.appendChild(img);
    } else {
      console.log("Parent element not found.");
    }
  }, 3000);

//handeling popup form  

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var { type ,value} = request;
     if(type=="setLocalStorage"){
       localStorage.setItem("formData", JSON.stringify(value));
       console.log(value)
      }
      if(type == "getFormData"){
        const storedData = localStorage.getItem("formData");
        const data = JSON.parse(storedData);
        if (data) {
         
          chrome.runtime.sendMessage({ type: "formaData",value:data});
        }
        chrome.runtime.sendMessage({ type: "formaData",value:"NOT FOUND"});
      }
   });

  



