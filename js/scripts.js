(function () {
  document.addEventListener("mousemove", parallax); // Add event listener
  const element = document.querySelector("#parallax"); // Select the element div with id parallax
  function parallax(e) {
    let _width = window.innerWidth / 2; // Get half window width
    let _height = window.innerHeight / 2; // Get half window height
    let _mouseX = e.clientX; //horizontal coordinate
    let _mouseY = e.clientY; //vertical coordinate
    let _depth1 = `${50 - (_mouseX - _width) * 0.1}% ${50 - (_mouseY - _height) * 0.1}%`;
    let _depth2 = `${50 - (_mouseX - _width) * 0.2}% ${50 - (_mouseY - _height) * 0.2}%`;
    let _depth3 = `${50 - (_mouseX - _width) * 0.3}% ${50 - (_mouseY - _height) * 0.3}%`;
    let bg_position = `${_depth3}, ${_depth2}, ${_depth1}`;
    //console.log(bg_position);
    element.style.backgroundPosition = bg_position;
  }
})();
