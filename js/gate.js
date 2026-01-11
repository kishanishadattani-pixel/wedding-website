(function(){
  const overlay = document.getElementById("gateOverlay");
  const site = document.getElementById("site");
  const pwd = document.getElementById("pwd");
  const btn = document.getElementById("btn");
  const msg = document.getElementById("msg");
  const video = document.getElementById("openVideo");
  const music = document.getElementById("music");

  function setMessage(t){ if(msg) msg.textContent = t; }

  // If already unlocked in this tab, skip the gate.
  try{
    if (REMEMBER_UNLOCK_IN_SESSION && sessionStorage.getItem("unlocked") === "true") {
      overlay.style.display = "none";
      site.classList.remove("site-hidden");
    }
  }catch(e){}

  async function unlock(){
    const val = (pwd.value || "").trim();
    if(!val){ setMessage("Enter the password."); return; }
    if(val !== SITE_PASSWORD){ setMessage("Incorrect password."); return; }

    try{ if(REMEMBER_UNLOCK_IN_SESSION) sessionStorage.setItem("unlocked","true"); }catch(e){}

    // Start music after user interaction (browser requirement)
    try{ await music.play(); }catch(e){}

    // Swap to video
    const ui = document.querySelector(".gate-ui");
    const bg = document.querySelector(".gate-bg");
    if(ui) ui.style.display = "none";
    if(bg) bg.style.display = "none";
    video.style.display = "block";

    try{
      video.currentTime = 0;
      await video.play();
    }catch(e){
      revealSite();
      return;
    }

    video.addEventListener("ended", revealSite, { once:true });
    setTimeout(()=>{ if(overlay && overlay.style.opacity !== "0") revealSite(); }, 6500);
  }

  function revealSite(){
    site.classList.remove("site-hidden");
    overlay.classList.add("gate-fade");
    setTimeout(()=>{ overlay.style.display = "none"; }, 950);
    try{ window.location.hash = "#anisha-weds-kishan"; }catch(e){}
  }

  btn.addEventListener("click", unlock);
  pwd.addEventListener("keydown", (e)=>{ if(e.key === "Enter") unlock(); });
})();
