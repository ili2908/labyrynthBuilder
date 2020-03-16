class LabBuilder{
  constructor(cur_tile,previous_tile,pool){
    pool.push(cur_tile);
    this.current_tile=cur_tile;
    this.current_tile.previous=previous_tile;
  }
  show(){
    fill(22);
    var x =this.current_tile.x;
    var y =this.current_tile.y;
    var s =this.current_tile.size;
    rect(x*s,y*s,s,s);
  }
  move(pool,grid,buildersTeam){
    
    var local_pool= grid.neighbours(this.current_tile,pool);
    
    if(local_pool.length==1){
      
      var v=random(local_pool);
      
      pool.push(v.tile);
      var tmp=this.current_tile;
      tmp.connections[v.direction]=true;
      this.current_tile=v.tile;
      //console.log(v.direction+" "+(-parseInt(v.direction)));
      
      this.current_tile.connections[""+(-parseInt(v.direction))]=true;
      this.current_tile.previous=tmp;
      return true;
    }else if(local_pool.length>1){
      
      var v=random(local_pool);
      if(random()<0.1){
      var v2=v;
        while(v2==v){
          v2=random(local_pool); 
        }
        buildersTeam.push(new LabBuilder(v2,this.current_tile,pool));
        
      }
      pool.push(v.tile);
      
      
      var tmp=this.current_tile;
      tmp.connections[v.direction]=true;
      this.current_tile=v.tile;
      //console.log(v.direction+" "+(-parseInt(v.direction)));
      
      this.current_tile.connections[""+(-parseInt(v.direction))]=true;
      this.current_tile.previous=tmp;
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