var grid;
var buildersTeam=[];
var pool=[];
var isBuild=false;
var walkers=[];


function setup() {
  
  createCanvas(400, 400);
  grid=new Grid(400,400,10);
  document.getElementById("button").addEventListener("click",reset);
  buildersTeam.push(new LabBuilder(grid.tiles[20][20],null,pool));
  buildersTeam.push(new LabBuilder(grid.tiles[20][20],null,pool));
  
  
  frameRate(30);
}
function reset(){
  grid=null;
  buildersTeam=[];
  pool=[];
  isBuild=false;
  walkers=[];
  
  setup();
}



function draw() {
  
  
  background(255);
  
  grid.show();
  
  for(var i = 0;i<buildersTeam.length;i++){
    if(!(buildersTeam[i].move(pool,grid,buildersTeam)))    {buildersTeam.splice(i,1)}
  }for(i = 0;i<buildersTeam.length;i++){
    buildersTeam[i].show();
  }
  isBuild=buildersTeam.length==0;
  if(isBuild){
    if(!walker){
       walker=new BetterWalker(grid);
       walker2 =new BadWalker(grid);
       
    }
     walker.show();
     walker.move();
     walker2.show();
     walker2.move();
    
  }
  
 
  
}