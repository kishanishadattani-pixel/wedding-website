(function(){
  const dEl = document.getElementById("d");
  const hEl = document.getElementById("h");
  const mEl = document.getElementById("m");
  if(!dEl || !hEl || !mEl) return;

  const target = new Date(COUNTDOWN_TARGET_ISO).getTime();

  function tick(){
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const totalMins = Math.floor(diff / 60000);
    const days = Math.floor(totalMins / (60*24));
    const hours = Math.floor((totalMins % (60*24)) / 60);
    const mins = totalMins % 60;

    dEl.textContent = String(days);
    hEl.textContent = String(hours).padStart(2,"0");
    mEl.textContent = String(mins).padStart(2,"0");
  }

  tick();
  setInterval(tick, 1000 * 15);
})();
