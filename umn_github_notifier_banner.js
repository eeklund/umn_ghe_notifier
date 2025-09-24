(function () {
  const current = location.href;

  const cloud = current.replace(
    "https://github.umn.edu/asrweb/",
    "https://github.com/umn-asr/"
  );

  const BAR_BG = "#ffcc33";
  const BAR_TEXT = "#000000";
  const BTN_BG = "#7a0019";
  const BTN_TEXT = "#ffffff";
  const BTN_BORDER = "#5c0012";

  const bar = document.createElement("div");
  bar.setAttribute("role", "alert");
  bar.style.position = "fixed";
  bar.style.top = "0";
  bar.style.left = "0";
  bar.style.right = "0";
  bar.style.zIndex = "200";
  bar.style.padding = "12px 18px";
  bar.style.fontFamily = "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";
  bar.style.fontSize = "16px";
  bar.style.fontWeight = "700";
  bar.style.color = BAR_TEXT;
  bar.style.background = BAR_BG;
  bar.style.boxShadow = "0 2px 8px rgba(0,0,0,.15)";
  bar.style.display = "flex";
  bar.style.alignItems = "center";
  bar.style.gap = "12px";

  const text = document.createElement("span");
  text.textContent = "You are viewing github.umn.edu! Did you mean github.com?";
  text.style.color = BAR_TEXT;
  bar.appendChild(text);

  const btn = document.createElement("a");
  btn.href = cloud;
  btn.textContent = "Switch to github.com";
  btn.style.display = "inline-block";
  btn.style.padding = "8px 12px";
  btn.style.borderRadius = "8px";
  btn.style.border = `1px solid ${BTN_BORDER}`;
  btn.style.textDecoration = "none";
  btn.style.background = BTN_BG;
  btn.style.color = BTN_TEXT;
  btn.style.whiteSpace = "nowrap";
  btn.style.fontWeight = "700";
  btn.style.lineHeight = "1.2";
  btn.style.outline = "none";
  btn.addEventListener("focus", function(){ btn.style.outline = "3px solid #000"; });
  btn.addEventListener("blur", function(){ btn.style.outline = "none"; });
  bar.appendChild(btn);

  const dismiss = document.createElement("button");
  dismiss.type = "button";
  dismiss.textContent = "Dismiss";
  dismiss.setAttribute("aria-label", "Dismiss legacy domain warning");
  dismiss.style.padding = "8px 12px";
  dismiss.style.borderRadius = "8px";
  dismiss.style.border = `1px solid ${BTN_BORDER}`;
  dismiss.style.background = BTN_BG;
  dismiss.style.color = BTN_TEXT;
  dismiss.style.fontWeight = "700";
  dismiss.style.lineHeight = "1.2";
  dismiss.style.cursor = "pointer";
  dismiss.style.whiteSpace = "nowrap";
  dismiss.style.outline = "none";
  dismiss.addEventListener("focus", function(){ dismiss.style.outline = "3px solid #000"; });
  dismiss.addEventListener("blur", function(){ dismiss.style.outline = "none"; });
  dismiss.onclick = function () {
    try { sessionStorage.setItem("umn_ghe_banner_dismissed", "1"); } catch (_e) {}
    if (bar.parentNode) bar.parentNode.removeChild(bar);
    if (spacer.parentNode) spacer.parentNode.removeChild(spacer);
  };
  bar.appendChild(dismiss);

  try {
    if (sessionStorage.getItem("umn_ghe_banner_dismissed") === "1") return;
  } catch (_e) {}

  const spacer = document.createElement("div");
  spacer.style.height = "60px";

  function inject() {
    if (!document.body) return;
    document.body.insertBefore(spacer, document.body.firstChild);
    document.body.appendChild(bar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
