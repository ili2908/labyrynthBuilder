class BadWalker extends Walker{
  constructor(labyrynth){
    super(labyrynth);
    this.winner=false;
    this.pool=[];
    this.color=color(22,22,22)
   
  }
  
  move(){
    if(this.winner){return true};
    this.pool.push(this.currentTile);
    var localPool=[];
      for (var i in this.currentTile.connections){
        var t=this.currentTile.connections[i];
        
        if(t&&this.pool.indexOf(t)<0){
          
          localPool.push(t);
          
        }
    }
      
    
    if(localPool.length!=0){
      
      var tmp =this.currentTile;
      this.currentTile=random(localPool);
     
      this.currentTile.previous=tmp;
      this.length++;
      
      
    }else{
      this.currentTile=this.currentTile.previous;
      this.length--;
    }
    if(this.currentTile==this.tgt){
      this.winner=true;
    }
    return false;
      
      
  } 
}