//Issue: When user clicks on an image, they get directed to a useless link
//Mission: to create a lightbox feature that displays the image in a large form in the middle of screen

//Actions:


//define the variables we need:
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//add image to overlay
$overlay.append($image);

//add caption to overlay
$overlay.append($caption);

//add overlay to body
$("body").append($overlay);

//FIRST FUNCTION
  // Capture the click event when user clicks on an image
  $("#imageGallery a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    
    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation);
    
    //show overlay
    $overlay.show();
    
    //Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

  });

  //SECOND FUNCTION

  //When overlay is clicked
    $overlay.click(function(){
  //Hide the overlay
    $overlay.hide();

  });








    // 1.capture  overlay
    // 2.update overlay with correct linked image
    // 3.get child's alt attribute and set caption
    // 4.display large image 
    // 5.on user click
    // 6.hide image again


  