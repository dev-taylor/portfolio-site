  // based on this tut: https://www.youtube.com/watch?v=sjpBWTsi7B0
  
let boundingRef = null

function onCardEnter(e) {
  boundingRef = e.currentTarget.getBoundingClientRect();
}

function onCardHover(e){
  if(boundingRef == null){
    return;
  }

  // find relative mouse coordinates
  const x = (e.clientX - boundingRef.left) / boundingRef.width;
  const y = (e.clientY - boundingRef.top) / boundingRef.height;

  // readjust the domain
  const adjustedX = (x - 0.5) * 2;
  const adjustedY = (0.5 - y) * 2;

  e.currentTarget.style.setProperty("--card-x-rot", `${adjustedY}deg`);
  e.currentTarget.style.setProperty("--card-y-rot", `${adjustedX}deg`);
  e.currentTarget.style.setProperty("--card-x-pos", `${x * 100}%`);
  e.currentTarget.style.setProperty("--card-y-pos", `${y * 100}%`);
}