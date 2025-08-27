console.log("Hello World");
async function getMyData() {
  const response = await fetch(
    "https://api.github.com/repos/CorinnaaKR/WK2-Assignment"
  );
  console.log("The response for the fetch is:", response);
  return response;
}

getMyData();

function createRepoData(repoData) {
  const repoDataContainer = document.getElementById("MyRepos");
  const repoData = document.createElement("p");
  repoData.textContent = response.url;
  repoDataContainer.appendChild(repoData);
}

async function addRepoDataToDom() {
  const repoInfo = await getMyData();
  createRepoData(repoInfo);
}
