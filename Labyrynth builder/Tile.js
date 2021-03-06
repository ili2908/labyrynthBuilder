class Tile{
  constructor(x,y,size){
    
    this.x=x;
    this.y=y
    this.size=size;
    this.previous=null;
    this.connections={"2":false,
                      "-2":false,
                       "-1":false,
                       "1":false}
    }
    show(){
      stroke(2);
      var size=this.size;
      var x =this.x*size;
      var y=this.y*size;
      if(!this.connections["2"])line(x,y,x+size,y);
      if(!this.connections["-2"])line(x,y+size,x+size,y+size);
      if(!this.connections["-1"])line(x+size,y,x+size,y+size);
      if(!this.connections["1"])line(x,y,x,y+size);
               
    }
    getPossibleNeighbours(){
      var poss=[];
      for(var i in this.connections){
        var tile= this.connections[i];
        if(tile)poss.push(tile);
      }
      return poss;
    }
}