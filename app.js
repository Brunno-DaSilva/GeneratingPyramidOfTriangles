/*
Bruno DaSilva
Generating a Pyramid of Triangles
*/

$(() => {
  // Function to generate the Pyramid
  const generatePyramid = numTiers => {
    //setting the position of the divs with flex box
    const $row = $("<div>").css({
      display: "flex",
      "justify-content": "center"
    });

    //generating the triangles
    const $triangle = $("<div>").css({
      display: "inline-block",
      width: "0px",
      height: "0px",
      "border-left": "50px solid transparent",
      "border-right": "50px solid transparent",
      "border-bottom": "100px solid #1468a9"
    });

    // looping through the parameter and appending the rows
    for (let i = 1; i <= numTiers; i++) {
      $rowTemp = $row.clone();
      $("body").append($rowTemp);

      for (let j = 1; j <= i; j++) {
        $rowTemp.append($triangle.clone());
      }
    }
  };

  // Pass the number of rows
  generatePyramid(5);
});
