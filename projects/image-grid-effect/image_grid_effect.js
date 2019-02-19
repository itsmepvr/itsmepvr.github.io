window.onload = function() {
    
    document.getElementById("input").defaultValue = "10";

    imageToGrid(10);  //run function with required size

    function imageToGrid(size, canvasWidth, canvasHeight){
    
        var img = document.getElementById("image");
        var wi = img.width;
        var he = img.height;  //full image height and width
        var numColsToCut = size;    //no of rows
        var numRowsToCut = size;    //no of columns    
        var widthOfOnePiece = wi/numColsToCut;  //width of piece
        var heightOfOnePiece = he/numRowsToCut; //height of piece
        canvasWidth = canvasWidth || 300; // default width of canvas
        canvasHeight = canvasHeight || 300; // default height of canvas

        // check for overflow 
        var isOverflown = wi > canvasWidth || he > canvasHeight;

        while(isOverflown){
            wi -= wi/100;
            he -= he/100;
            isOverflown = wi > canvasWidth || he > canvasHeight;
        }    
        wi = wi/size;
        he = he/size;

        var count = 0;
        
        for(var x = 0; x < numColsToCut; ++x) {
            for(var y = 0; y < numRowsToCut; ++y) {
                var canvas = document.createElement("canvas");
                var br = document.createElement("br");
                
                canvas.width = wi;
                canvas.height = he;

                canvas.setAttribute("id","canvas"+count+"");
                canvas.setAttribute("class","canvas");
                
                count++;
                var context = canvas.getContext('2d');

                context.drawImage(img, y * widthOfOnePiece, x * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, wi, he);
                
                document.getElementById("main").appendChild(canvas);
                
                if(count%numColsToCut == 0){
                    document.getElementById("main").appendChild(br);    
                }
            }
        }
    }
    
    $("button").click(function(){
        $("#main").html("");
        val = $('input').val()
        if(val == 0){
            imageToGrid(1);
        }
        imageToGrid(val);
    })
    
}
