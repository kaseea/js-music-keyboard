$(document).ready( function() {
   
    $('body').on('click', 'button', function(event) {
      let noteLetter = `${$(this).html()}`;
      let classy = noteLetter + `Audio`;
      let mediaElem = document.getElementById(classy);
      mediaElem.load();
      mediaElem.play();   
    });

    $('body').keydown((e) => {
      // console.log(e.key);
      let classy = e.key + `Audio`;
      // console.log(classy)
      let mediaElem2 = document.getElementById(classy);
      // console.log(mediaElem2);
      mediaElem2.load();
      mediaElem2.play();
    })
        // this is amazing and all you need, gives you the letter
        // console.log(`${$(this).html()}`)
  
});



// var mediaElem = document.getElementById("my-media-element");
// mediaElem.load();