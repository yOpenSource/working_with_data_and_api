    console.log(" going to fetch a image from server");

   let res =  await fetch('wooden_table.jpg');
   let blob = await res.blob();
   document.getElementById('wooden_table').src=URL.createObjectURL(blob);
