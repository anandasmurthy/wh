function contact(object,particle){
    if (object.x - particle.x < particle.width/2 + object.width/2
      && particle.x - object.x < particle.width/2 + object.width/2) {
    object.velocityX *= -1
    particle.velocityX *= -1;
    }
    if (object.y - particle.y < particle.height/2 + object.height/2
    && particle.y - object.y < particle.height/2 + object.height/2){
      particle.velocityY *= -1;
    object.velocityY = object.velocityY * -1 ;
    }
    }