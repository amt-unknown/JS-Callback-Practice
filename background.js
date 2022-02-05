function setBackgrond(){
    for(let i = 0; i < Math.ceil(window.innerWidth/100); i++){
        for(let j = 1; j < Math.ceil(window.innerHeight/100); j++){
            if(j < 7){
                move(newImage('assets/grass.png')).to(100*i, 100*j)
            }
            else{
                move(newImage('assets/sky.png')).to(100*i,100*j)
            }
        }
    }
}
