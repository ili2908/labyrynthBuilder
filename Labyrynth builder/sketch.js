var grid;
var buildersTeam=[];
var pool=[];
var isBuild=false;
var walkers=[];
var x=400;
var y=400;

function setup() {
  
  createCanvas(x, y);
  grid=new Grid(x,y,10);
  document.getElementById("button").addEventListener("click",reset);
  x = round(x/20);
  y = round(y/20);
  buildersTeam.push(new LabBuilder(grid.tiles[x][y],null,pool));
  buildersTeam.push(new LabBuilder(grid.tiles[x][y],null,pool));
  
  //set your
  frameRate(30);
}
function reset(){
  grid=null;
  buildersTeam=[];
  pool=[];
  isBuild=false;
  walkers=[];
  x=document.getElementById("x").value*10;
 
  y=document.getElementById("y").value*10;
  setup();
}



function draw() {
  
  
  background(255);
  
  grid.show();
  
     
    
  for(var i = 0;i<buildersTeam.length;i++){
    if(!(buildersTeam[i]
          .move(pool,grid,buildersTeam))){
    buildersTeam.splice(i,1);}
  
  }
  for(i = 0;i<buildersTeam.length;i++){
    //comment it if you don`t want to see builders
    buildersTeam[i].show();
  }
  isBuild=buildersTeam.length==0;
  if(isBuild){
    if(walkers.length==0){
      //it will take some time for them  to spawn
       walkers.push(new BetterWalker(grid));
       walkers.push(new BadWalker(grid));
       walkers.push(new YourWalker(grid));
       
       
    }
    for(var walker of walkers){
      walker.show();
      walker.move();
    }
    
  }
}
