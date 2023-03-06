
// Create popup container
const popupContainer = document.createElement('div');
popupContainer.setAttribute('id', 'popup-container');
popupContainer.style.display = 'none';
popupContainer.style.position = 'fixed';
popupContainer.style.top = '0';
popupContainer.style.left = '0';
popupContainer.style.width = '100%';
popupContainer.style.height = '100%';
// popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
popupContainer.style.zIndex = '9999';

// Create popup content
const popup = document.createElement('div');
popup.setAttribute('class', 'popup');
popup.style.position = 'absolute';
popup.style.top = '50%';
popup.style.left = '40%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.backgroundColor = 'white';
popup.style.padding = '20px';
popup.style.borderRadius = '10px';
popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
popup.style.textAlign = 'center';
popup.style.width = '300px';
popup.style.height = '500px';
popup.style.fontSize = '20px';
popup.style.color = '#333';

// Create close button
const closeButton = document.createElement('span');
closeButton.setAttribute('class', 'close');
closeButton.style.position = 'absolute';
closeButton.style.top = '10px';
closeButton.style.right = '10px';
closeButton.style.fontSize = '20px';
closeButton.style.color = '#333';
closeButton.style.cursor = 'pointer';
closeButton.innerHTML = '&times;';

// Add close button to popup
popup.appendChild(closeButton);

// Create popup content
const popupContent = document.createElement('div');
popupContent.innerHTML = '<h6>Generate Message</h6><hr/><div style="font-weight: normal; font-size: small;"   id = "messageList">Please Wait Generating your message!!</div>';

// Add popup content to popup
popup.appendChild(popupContent);

// Add popup to container
popupContainer.appendChild(popup);

// Add popup container to document
document.body.appendChild(popupContainer);


// Get references to DOM elements
const openButton = document.getElementById('messageOpenai');





// Add event listener to close button
closeButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});
