"use strict";
function showNotification(object) {
    const createElement = document.createElement("div");
    createElement.className = object.className;
    createElement.style.position = "absolute";
    createElement.style.top = object.top + "px";
    createElement.style.right = object.right + "px";
    createElement.innerHTML = object.html;
    document.body.appendChild(createElement);
}
showNotification({
    top: 10,
    right: 10,
    html: "Hello",
    className: "welcome"
});
