console.log(" going to fetch a image from server");

 async function get_wooden_table(){
   let res =  await fetch('wooden_table.jpg');
   let blob = await res.blob();
   document.getElementById('wooden_tble').src=URL.createObjectURL(blob);
}

get_wooden_table().catch(
  error => {
    console.log('Caught Error :');
    console.error(error);
  }
);
