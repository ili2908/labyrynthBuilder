var grid;
var buildersTeam=[];
var pool=[];
function setup() {
  createCanvas(400, 400);
  grid=new Grid(400,400,10);
  buildersTeam.push(new LabBuilder(grid.tiles[0][0],null,pool));
  
  frameRate(2);
}

function draw() {
  background(255);
  grid.show();
  for(var i = 0;i<buildersTeam.length;i++){
    if(!(buildersTeam[i].move(pool,grid,buildersTeam))){buildersTeam.splice(i,1)}
  }for(i = 0;i<buildersTeam.length;i++){
    buildersTeam[i].show();
  }
  
  
  
}