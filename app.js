const container = document.getElementById("memeSection");
const form = document.getElementById("memeForm");


//add new meme to memeSection upon submit click event 
form.addEventListener( 'submit', function(e) {
  e.preventDefault();
 
  // set the submitted url as the div background image
  const newUrl = e.target[0].value;
  // return if url is blank
  if (!newUrl) return;  
  //create elements for text to display on image
  const header = document.createElement("h2");
  const subtext = document.createElement("h3");
  header.style.fontFamily = "impact";
  subtext.style.fontFamily = "impact";
  //assign the input values for url and optional text
  header.innerHTML = e.target[1].value;
  subtext.innerHTML = e.target[2].value;
  fontColor = e.target[3].value;
  header.style.color = fontColor
  subtext.style.color = fontColor
  console.log(fontColor)
  // create a new div
  const newDiv = document.createElement("div");
  newDiv.style.backgroundImage = `url(${newUrl})`;
  // give it a class attribute
  newDiv.classList.add("meme");
  // append the div to the section
  container.append(newDiv);
  newDiv.append(header);
  newDiv.append(subtext);
  // clear the input values;
  form.reset();
});


// cat image for testing: https://bit.ly/2Rx22c6