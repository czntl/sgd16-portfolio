

let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  
  const deltaX = e.clientX - lastX;
  const deltaY = e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;
  
  const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
  
  cursor.style.width = `${50 + speed / 2}px`;
  cursor.style.height = `${50 - speed / 2}px`;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener('scroll', () => {
  const cursor = document.getElementById('cursor');
  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX;
  cursor.style.transform = `translate(${scrollLeft}px, ${scrollTop}px)`;
});
