console.log("Hello world");

//TODO: get data from JSON placeholder
//Steps:
// connect with the API to request data

async function getData() {
  const response = await fetch("");
  console.log(response);
  // - format the response in JSON
  const data = await response.json();
  console.log(data);
}

getData();

//asynchronus and synchronous code
// promise = recept
//sychronous code is read top to bottom at its own pace

//if we run async code in a sync way, we get a Promise (the browser aachknowledges there is a request, but the response has not been sent yet)

//asynchronous code is code that requires a different timing to be executed (the browers puts it onto a different stack)
//tell the browser to wait until the asynchronous code finishes to excute it
