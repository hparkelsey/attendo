setScreen("Start");
var nu = 0;
//nu= new user
onEvent("image3", "click", function( ) {
  if (nu == 0) {
    setScreen("link");
  } else {
    setScreen("Attend");
  }
});
onEvent("label3", "click", function( ) {
  if (nu == 0) {
    setScreen("link");
  } else {
    setScreen("Attend");
  }
});
onEvent("label4", "click", function( ) {
  if (nu ==0) {
    setScreen("link");
  } else {
    setScreen("Attend");
  }
});
onEvent("Start", "click", function( ) {
  if (nu ==0) {
    setScreen("link");
  } else {
    setScreen("Attend");
  }
});
onEvent("save", "click", function( ) {
  if (getText("link1") == "") {
    hideElement("space1");
    hideElement("button1");
  }
  if (getText("link2") == "") {
    hideElement("space2");
    hideElement("button2");
  }
  if (getText("link3") == "") {
    hideElement("space3");
    hideElement("button3");
  }
  if (getText("link4") == "") {
    hideElement("space4");
    hideElement("button4");
  }
  if (getText("link5") == "") {
    hideElement("space5");
    hideElement("button5");
  }
  if (getText("link6") == "") {
    hideElement("space6");
    hideElement("button6");
  }
  if (getText("link7") == "") {
    hideElement("space7");
    hideElement("button7");
  }
  setScreen("Attend");
  nu = 1;
});
onEvent("button1", "click", function( ) {
  showElement("check1");
  open(getText("link1"));
});
onEvent("button2", "click", function( ) {
  showElement("check2");
  open(getText("link2"));
});
onEvent("button3", "click", function( ) {
  showElement("check3");
  open(getText("link3"));
});
onEvent("button4", "click", function( ) {
  showElement("check4");
  open(getText("link4"));
});
onEvent("button5", "click", function( ) {
  showElement("check5");
  open(getText("link5"));
});
onEvent("button6", "click", function( ) {
  showElement("check6");
  open(getText("link6"));
});
onEvent("button7", "click", function( ) {
  showElement("check7");
  open(getText("link7"));
});
onEvent("edit", "click", function( ) {
  setScreen("link");
  //May have to set links as variables. x = getText. And then for blanks, if x = "_"
});
onEvent("reset", "click", function( ) {
  hideElement("check1");
  hideElement("check2");
  hideElement("check3");
  hideElement("check4");
  hideElement("check5");
  hideElement("check6");
  hideElement("check7");
});
