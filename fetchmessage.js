//  const generateMessage = async(messageHistory,element) =>{
//   var message ;
//    const apiKey = "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";
//    const prompt = generatePrompt(messageHistory);
//    const response = await apiCall(prompt,apiKey).then(response => response.json())
//         .then((data) =>{
//          element.innerText= data.choices[0].text;
//           console.log(data.choices[0].text) })
//         .catch(error => console.error(error));
//         const data = JSON.parse(response)
//         console.log(data)


//         return message;
// }
// const apiCall = async(prompt,apiKey) =>{
//   const response = await fetch('https://api.openai.com/v1/completions',{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${apiKey}`
//     },
//     body: JSON.stringify({
//       "prompt": prompt,
//     "model": "text-davinci-003",

// "temperature": 0.7,
// "max_tokens": 256,
// "top_p": 1,
// "frequency_penalty": 0,
// "presence_penalty": 0
//     })
// });
// return response;
// }

// //genearate propmpt
// const generatePrompt =(messageHistory) => { 
//   const storedData = localStorage.getItem("formData");
//   const data = JSON.parse(storedData);
//   var prompt = `I am sharing the conversation between ${data.name} and other guy (it is in text format and is chat between them).About ${data.name}   "${data.desc}" and his job role is ${data.job}.
// Please write the appropriate message Arjav should send  (directly give desired message)  . Also do not add this type of format in your response (${data.name} sent the following message at 9:43 AM
// View ${data.name}'s profile
// ${data.name}  9:43 AM).
// Message = "
// ${messageHistory}
// "
// `
// return prompt;
// } 

// // Using set-timeout need to find better solution 
// setTimeout(async function() {
//     var events = document.getElementsByClassName("msg-s-message-list__event clearfix");
//     var message = "";
//     for (var i = 0; i < events.length; i++) {
//       message += events[i].innerText.trim();
//       message +="\n"
//     }
//     console.log(message);
//   var aiMessage =  await generateMessage(message);
//   console.log(aiMessage)
//   let element = document.getElementById("messageList");
//   element.innerText = aiMessage;
   
//   }, 5000);

  // var messageList = document.getElementById("messageList");
  // messageList.addEventListener("click", ()=>{
  //      const msg = messageList.innerText;
  //      const parentDiv = document.querySelector('.msg-form__msg-content-container--scrollable.scrollable.relative');
  //      parentDiv.innerText = msg;
  // })






