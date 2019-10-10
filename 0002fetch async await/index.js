console.log(" going to fetch a image from server");

 async function get_wooden_table(){
   let res =  await fetch('wooden_table.jpg');
   let blob = await res.blob();
   document.getElementById('wooden_table').src=URL.createObjectURL(blob);
}

//async function also returns a promise
//so we can use .then after the async function call

get_wooden_table()
.then(
  response => {
    console.log("just having fun with it");
  }
)
.catch(
  error => {
    console.log('Caught Error :');
    console.error(error);
  }
);
