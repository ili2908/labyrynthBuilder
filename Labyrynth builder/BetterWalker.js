class BetterWalker extends BadWalker{
 constructor(labyrynth){
   super(labyrynth);
   this.color=color(255,0,0);
 }
  
  move(){
    if(this.winner){return true};
    this.pool.push(this.currentTile);
    var localPool=[];
    var cur = this.currentTile;
    var neighbours = cur.getPossibleNeighbours();
    for (var i of neighbours){            
        if(this.pool.indexOf(i)<0){
          
          localPool.push(i);
          
        }
    }
    
    
    if(localPool.length!=0){
      
      var tmp =this.currentTile;
      var bestVar=localPool[0];
      var bestDist=10000;
      for(var tile of localPool){
        if(bestVar){
          var x1 = tile.x;
          var y1 = tile.y;
          var x2 = this.tgt.x;
          var y2 = this.tgt.y;
          
          if(dist(x1,y1,x2,y2)<bestDist){
            bestDist =dist(x1,y1,x2,y2);
            bestVar=tile;
          }
        }
      }
      
      this.currentTile=bestVar;
      this.currentTile.previous=tmp;
      this.length++;
    }
    else{
      this.currentTile=this.currentTile.previous;
      this.length--;
    }
    if(this.currentTile==this.tgt){
      this.winner=true;
    }
    return false;
      
      
  } 
}