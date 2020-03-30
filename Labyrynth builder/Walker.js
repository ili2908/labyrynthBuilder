class Walker{
  constructor(labyrynth){
    this.labyrynth=labyrynth.tiles;
    this.currentTile=labyrynth.tiles[0][0];
    this.winner=false;
    this.tgt=labyrynth.tiles[labyrynth.x-1][labyrynth.y-1];
    this.color=color(10,10,10);
  }
  move(){
    //var cur = this.currentTile;
    //var neighbours = cur.getPossibleNeighbours();
    //this.currentTile = random(neighbous);
    //TODO
    
  }
  show(){
  noStroke();
   fill(this.color);
    var x =this.currentTile.x;
    var y =this.currentTile.y;
    var s =this.currentTile.size;
    rect(x*s,y*s,s,s);
  }
  
}