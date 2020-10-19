// IN TESTS... \\


/*

function simple_slide_show()
        {
            var indice_array = 0; //Always start at zero
            var images = []; //Array without limits
            var time_change = 5000; //Time in milliseconds
        
            images[0] = "path / image";
            images[1] = "path / image";
            images[2] = "path / image";
            document.name_in_tag.src = images[indice_array];

            if(indice_array < images.length - 1){
                indice_array++;
            } else {
                indice_array = 0;
            }
    
            setTimeout("simple_slide_show()", time_change);
        }

    window.onload=simple_slide_show; //When loading, call function

  <img name="name_in_tag" width="1300" height="400" />

*/


/*
  function machine_write(element) {
    const text_Array = element.innerHTML.split('');
    element.innerHTML = '';
    text_Array.forEach((letra, i) => {
      setTimeout(() => element.innerHTML += letra, 75 * i);
    });
//##########################################################\\
//##########################################################\\

    //const titulo = document.querySelector('h1');
    //machine_write(titulo);
  }
   */