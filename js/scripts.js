(function () {
  document.addEventListener("mousemove", parallax); // Add event listener
  const element1 = document.querySelector("#front-parallax"); // Select the element div with id parallax
  const element2 = document.querySelector("#bg-parallax"); // Select the element div with id bg-parallax
  function parallax(e) {
    let _width = window.innerWidth / 2; // Get half window width
    let _height = window.innerHeight / 2; // Get half window height
    let _mouseX = e.clientX; //horizontal coordinate
    let _mouseY = e.clientY; //vertical coordinate
    //tree leaves
    let _depth1 = `${50 - (_mouseX - _width) * 0.02}% ${50 - (_mouseY - _height) * 0.02}%`;
    let _depth2 = `${50 - (_mouseX - _width) * 0.01}% ${50 - (_mouseY - _height) * 0.01}%`;
    //bg coofe cups
    let _depth3 = `${50 - (_mouseX - _width) * 0.02}% ${50 - (_mouseY - _height) * 0.02}%`;
    let _depth4 = `${50 - (_mouseX - _width) * 0.01}% ${50 - (_mouseY - _height) * 0.01}%`;
    
    let leaves_position = `${_depth1}, ${_depth2}`;
    let coofe_cups_position = `${_depth3}, ${_depth4}`;

    element1.style.backgroundPosition = leaves_position;
    element2.style.backgroundPosition = coofe_cups_position;
  }
})();
