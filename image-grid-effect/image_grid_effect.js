window.onload = function() {
    
    document.getElementById("input").defaultValue = "10";

    imageToGrid(10);  //run function with required size

    function imageToGrid(size){
    
        img = document.getElementById("image");
        wi = img.width;
        he = img.height;  //full image height and width
        numColsToCut = size;    //no of rows
        numRowsToCut = size;    //no of columns    
        widthOfOnePiece = wi/numColsToCut;  //width of piece
        heightOfOnePiece = he/numRowsToCut; //height of piece
        count = 0;
        
        for(var x = 0; x < numColsToCut; ++x) {
            for(var y = 0; y < numRowsToCut; ++y) {
                var canvas = document.createElement("canvas");
                var br = document.createElement("br");
                
                canvas.width = widthOfOnePiece;
                canvas.height = heightOfOnePiece;

                canvas.setAttribute("id","canvas"+count+"");
                canvas.setAttribute("class","canvas");
                
                count++;
                var context = canvas.getContext('2d');

                context.drawImage(img, y * widthOfOnePiece, x * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, widthOfOnePiece, heightOfOnePiece);
                
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
