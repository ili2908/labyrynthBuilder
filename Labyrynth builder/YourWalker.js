class YourWalker extends Walker{
  constructor(labyrynth){
    super(labyrynth)
    this.color=color(78,34,89);//chose your
  }
   move(){
    //there is no need  to move if you have already won;
    if(this.alreadyWon())return;
    
    var cur = this.currentTile;
    var neighbours = cur.getPossibleNeighbours();
    //you need to find efficient way choise next tile amoung neighbours
    //feel free to add properties to tiles like cur.property=...;
    this.currentTile = random(neighbours);
    
     
    
  }
  
}