// //TODO: i want to get images data from an API and render the images on the DOM

// //TODO: i want to get images ata from an API

// async function getFoxes() {
// const response = await response.json("https://randomfox.ca.floor/");
console.log(data);

const wrangleData = data.image;
{
  console.log(wrangleData);
  return wrangleData;
}

getFoxes();

function createFoxImage(foxUrl) {
  const foxesContainer = document.getElementById("foxesContainer");
  const foxImage = document.createElement("img");
  foxImage.src = foxUrl;
  foxImage.alt = "A randomly generated image of a fox in nature";
  foxesContainer.appendChild(foxImage);
}

async function addFoxDataToImage() {
  const foxesData = await getFoxes();
  createFoxImage(foxesData);
}

// //TODO: put data and image together
