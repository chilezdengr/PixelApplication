// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(rows, columns) {
// Your code goes here!
  for(let i=1; i<=rows; i++){
//selects the table and appends the rows depending on the user input
    var tab = $('table');
    tab.append('<tr></tr>');
}
//selects the tag table row<tr> to append the column
    for(let i=1; i<=columns; i++){
        $('tr').append('<td></td>');
    }
}
// Select size input
// .When the height and width size is submitted by the user,the makeGrid() is called
//use the .submit method

  $('form').submit(function(event){
    let rows = $('input#inputHeight').val();
    let columns = $('input#inputWeight').val();

    // clears the DOM to append the next <tr><td>
    $('tr').remove();
    //calls the makeGrid() function
    makeGrid(rows, columns);
    event.preventDefault();
});

$('#colorPicker').change(function(event){
    let gridColor = $(this).val();
    $('td').click(function(event){
        $(this).css("background-color", gridColor);
    });

    event.preventDefault();
});


