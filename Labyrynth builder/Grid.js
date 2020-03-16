class Grid{
  constructor(window_x,window_y,size){
   this.tiles=[];
   this.window_x=window_x;
   this.window_y=window_y;
   this.size=size;
   for(var i = 0;i<round(window_x/size);i++){
     this.tiles.push([])
     for(var j = 0;j<round(window_y/size);j++){
       this.tiles[i][j]=new Tile(i,j,this.size);
     }
   }
  }
  show(){
     for(var i = 0;i<round(this.window_x/this.size);i++){
     
       for(var j = 0;j<round(this.window_y/this.size);j++){
         this.tiles[i][j].show();
       }
     }
   }
  inPool(tile,pool){
    for(var i=0;i<pool.length;i++){
      if(tile==pool[i]){
        return true;
      }
    }return false;
  }
  checkAndPush(x,y,n,direction,pool){
    
    if(this.tiles[x]&&this.tiles[x][y]&&!this.inPool(this.tiles[x][y],pool)){
      n.push({tile:this.tiles[x][y],direction:direction});
    }
    
  }
  neighbours(tile,pool){
    
    var n =[];
    var x = tile.x;
    var y = tile.y;
    this.checkAndPush(x-1,y,n,"1",pool);
    this.checkAndPush(x,y-1,n,"2",pool);
    this.checkAndPush(x,y+1,n,"-2",pool);
    this.checkAndPush(x+1,y,n,"-1",pool);
    return n;
  }
 
}