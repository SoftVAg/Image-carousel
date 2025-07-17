const track = document.getElementById('carousel-track');
        let isSliding=false;

        
  function moveNext() {
    if (isSliding) return;
    isSliding = true;

    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = 'translateX(-500px)';

    setTimeout(() => {
      track.appendChild(track.children[0]);
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      isSliding = false;
    }, 500);
  }

  function movePrev() {
    if (isSliding) return;
    isSliding = true;

    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transition = 'none';
    track.style.transform = 'translateX(-500px)';

    requestAnimationFrame(() => {
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = 'translateX(0)';
    });

    setTimeout(() => {
      isSliding = false;
    }, 500);
  }
