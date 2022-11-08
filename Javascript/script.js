function formPicture(){
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");
    canvas.height = canvas.width;
    

    const Array = calculateCoords();

    context.fillStyle = "white";
    for (let i = 0; i < Array.length-1; i++) {
        let x = Math.round(Array[i].x);
        let y = Math.round(Array[i].y);
        
        context.beginPath();
        context.rect(x, y, 1, 1);
        context.fill();
    }
}

function calculateCoords(){
    var startingPoint = [85, 286]; //set a the first point (2/3 of 1 --> 6)
    var coordinates = []; //Formatting the list where we will save our coordinates to

    //Calculates x amount of points so the picture starts to form
    for(var i = 0; i < 10000000; i++){
        var corner = Math.floor(Math.random() * 6) + 1;
        var cornerPoint = whichCorner(corner); //Getting the corner by random number in between 1 - 6.
        var point = calculateNextOne(startingPoint, cornerPoint);

        startingPoint = point; //Changing the value of the "startingPoint"

        coordObj = {
            x: point[0],
            y: point[1]
        };
        
        coordinates[i] = coordObj;  //Saving the coordinates to a list
    }

    return coordinates;
}

//Calculates the coordinates for the next point (always 2/3rds of the distance between the two points towards the end point)
function calculateNextOne (point1,point2){
    //Calculating the coordinates x and y for the next point by using the coordinates of our starting and end point
    var x = Math.round(point1[0] + ((point2[0] - point1[0])*0.66));
    var y = Math.round(point1[1] + ((point2[1] - point1[1])*0.66));

    var new_point = [x,y]; //Saving them together as a list
    
    return new_point; //Returning it so it can be used later
}

//This function returns the coordinates of the hexagons corners, the corner is selected by random number generator
function whichCorner(corner){
    switch(corner){
         case 1:
            var coordinates = [250,67];
            return coordinates;
        case 2:
            var coordinates = [750,67];
            return coordinates;
        case 3:
            var coordinates = [1000,500];
            return coordinates;
        case 4:
            var coordinates = [750,933];
            return coordinates;
        case 5:
            var coordinates = [250,933];
            return coordinates;
        case 6:
            var coordinates = [0,500];
            return coordinates;
    }
}

//Assigning the calculated coordinates here so they can be used

formPicture();