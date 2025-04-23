document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a, .socials img").forEach(el => {
    el.addEventListener("mouseover", () => {
      el.style.transform = "scale(1.1)";
      el.style.transition = "transform 0.3s ease";
    });
    el.addEventListener("mouseout", () => {
      el.style.transform = "scale(1)";
    });
  });
  
  const snowContainer = document.createElement('div');
  snowContainer.style.position = 'fixed';
  snowContainer.style.top = '0';
  snowContainer.style.left = '0';
  snowContainer.style.width = '100%';
  snowContainer.style.height = '100%';
  snowContainer.style.pointerEvents = 'none';
  snowContainer.style.zIndex = '1';
  document.body.appendChild(snowContainer);

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerText = '❄';
    snowflake.style.position = 'absolute';
    snowflake.style.color = 'white';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = '-20px';
    snowflake.style.opacity = Math.random();
    snowflake.style.transition = 'top 10s linear';

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.style.top = window.innerHeight + 'px';
    }, 100);

    setTimeout(() => {
      snowflake.remove();
    }, 10000);
  }

  // Faire tomber des flocons toutes les 200ms
  setInterval(createSnowflake, 200);
});
