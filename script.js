const comments = [
  document.getElementById("1"), document.getElementById("2"), document.getElementById("3")
]

const arrowUp = document.getElementById("up")
const arrowDown = document.getElementById("down")

let cursor = 0;

function scrollDown(){
  
  if(cursor == 2){
    return false;
  }

  cursor = (cursor +1) % 3

  if(cursor == 1){
    comments[cursor].className = 'comment'
    comments[(cursor +1) % 3].className = 'comment behind'
    comments[(cursor +2) % 3].className = 'comment behind hidden'
    arrowUp.className = 'up blue'
  } else if(cursor == 2){
    comments[cursor].className = 'comment'
    comments[(cursor +1) % 3].className = 'comment behind hidden'
    comments[(cursor +2) % 3].className = 'comment behind hidden'
    arrowDown.className = 'down gray'
  }

  return false;
}

function scrollUp(){
  
  if(cursor == 0){
    return false;
  }

  cursor = (cursor -1 + 3) % 3

  if(cursor == 1){
    comments[cursor].className = 'comment'
    comments[(cursor -1 + 3) % 3].className = 'comment behind hidden'
    comments[(cursor -2 + 3) % 3].className = 'comment behind'
    arrowDown.className = 'down blue'
  } else if(cursor == 0){
    comments[cursor].className = 'comment'
    comments[(cursor -2 + 3) % 3].className = 'comment behind'
    comments[(cursor -1 + 3) % 3].className = 'comment behind hidden'
    arrowUp.className = 'up gray'
  }
  return false;
}