class LabBuilder{
  
  constructor(cur_vertex,previous_vertex,pool){
    if(! LabBuilder.pool){
          LabBuilder.pool=[];
    }
    LabBuilder.pool.push(cur_vertex);
    pool.push(cur_vertex);
    this.currentTile=cur_vertex;
    this.currentTile.previous=previous_vertex;
  }
  show(){
   noStroke();
   fill(color(10,10,10));
    var x =this.currentTile.x;
    var y =this.currentTile.y;
    var s =this.currentTile.size;
    rect(x*s,y*s,s,s);
  }  
  
  umove(pool,grid){
    var local_pool= grid.neighbours(this.current_tile,pool);
    if(local_pool.length==0)return{local:[]}
    
    var v=random(local_pool);
      
      pool.push(v.tile);
      var tmp=this.current_tile;
      tmp.connections[v.direction]= v.tile;
      this.current_tile=v.tile;
     
      
      this.current_tile
        .connections[""+(-parseInt(v.direction))]=tmp;
      this.current_tile.previous=tmp;
      return {tile:v,local:local_pool};
  }
  move(pool,grid,buildersTeam){
    
    
    var v = this.umove(pool,grid);
    if(v.local.length==1){
      return true;
    }else if(v.local.length>1){
      
      
      if(random()<0.1){
      var v2=v.tile;
        while(v2==v.tile){
          v2=random(v.local); 
        }
        buildersTeam.push(new LabBuilder(v2,this.current_tile,pool));
        
      }
      return true;
    }else{
      if(this.current_tile.previous){
          this.current_tile=this.current_tile.previous;
          return true;
      }
      else{
          return false;
      }
    }
  }
  
  
  
  
  
}