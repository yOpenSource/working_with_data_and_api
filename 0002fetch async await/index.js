
   console.log(" going to fetch a image from server");
  fetch('wooden_table.jpg').then(
    response => {
      return response.blob();
    }
  ).then(
    response => {
      document.getElementById('wooden_table').src=URL.createObjectURL(response);
    }
  ).catch(
    error => {
      console.log('error occured  as follows :');
      console.log(error);
    }
  );
