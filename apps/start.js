var g = Graphics.getInstance();

const d = g.getWidth() - 18;
function c(a) {
  return {
    width: 8,
    height: a.length,
    bpp: 1,
    buffer: (new Uint8Array(a)).buffer
  };
}

function welcome() {
  var welcomes = [
    'Welcome',
    'Failte',
    'Bienvenue',
    'Willkommen',
    'Bienvenido'
  ];
  function next() {
    var n = welcomes.shift();
    E.showMessage(n);
    g.drawImage(c([0,8,12,14,255,14,12,8]),d,116);
    welcomes.push(n);
  }
  return new Promise((res) => {
    next();
    var i = setInterval(next, 2000);
    setWatch(() => {
      clearInterval(i);
      clearWatch();
      E.showMessage('Loading...');
      res();
    }, BTN2, {repeat:false});
  });
}

function logos() {
  var logos = [
    ['nfr', 20, 90, ()=>{}],
    ['nceu', 20, 90, ()=>{
      g.setFont("6x8", 2);
      g.setColor(0,0,1);
      g.drawString('Welcome To', 160, 110);
      g.drawString('NodeConfEU', 160, 130);
      g.drawString('2019', 200, 150);
    }],
    ['bangle', 70, 90, ()=>{}],
    ['nodew', 20, 90, ()=>{}],
    ['tf', 5, 60, ()=>{}],
  ];
  function next() {
    var n = logos.shift();
    var img = require("Storage").read("*"+n[0]);
    g.clear();
    g.drawImage(img, n[1], n[2]);
    n[3]();
    g.drawImage(c([0,8,12,14,255,14,12,8]),d,116);
    logos.push(n);
  }
  return new Promise((res) => {
    next();
    var i = setInterval(next, 2000);
    setWatch(() => {
      clearInterval(i);
      clearWatch();
      res();
    }, BTN2, {repeat:false});var g = Graphics.getInstance();

const d = g.getWidth() - 18;
function c(a) {
  return {
    width: 8,
    height: a.length,
    bpp: 1,
    buffer: (new Uint8Array(a)).buffer
  };
}

function welcome() {
  var welcomes = [
    'Welcome',
    'Failte',
    'Bienvenue',
    'Willkommen',
    'Bienvenido'
  ];
  function next() {
    var n = welcomes.shift();
    E.showMessage(n);
    g.drawImage(c([0,8,12,14,255,14,12,8]),d,116);
    welcomes.push(n);
  }
  return new Promise((res) => {
    next();
    var i = setInterval(next, 2000);
    setWatch(() => {
      clearInterval(i);
      clearWatch();
      E.showMessage('Loading...');
      res();
    }, BTN2, {repeat:false});
  });
}

function logos() {
  var logos = [
    ['nfr', 20, 90, ()=>{}],
    ['nceu', 20, 90, ()=>{
      g.setFont("6x8", 2);
      g.setColor(0,0,1);
      g.drawString('Welcome To', 160, 110);
      g.drawString('NodeConfEU', 160, 130);
      g.drawString('2019', 200, 150);
    }],
    ['bangle', 70, 90, ()=>{}],
    ['nodew', 20, 90, ()=>{}],
    ['tf', 5, 60, ()=>{}],
  ];
  function next() {
    var n = logos.shift();
    var img = require("Storage").read("*"+n[0]);
    g.clear();
    g.drawImage(img, n[1], n[2]);
    n[3]();
    g.drawImage(c([0,8,12,14,255,14,12,8]),d,116);
    logos.push(n);
  }
  return new Promise((res) => {
    next();
    var i = setInterval(next, 2000);
    setWatch(() => {
      clearInterval(i);
      clearWatch();
      res();
    }, BTN2, {repeat:false});
  });
}

function info() {
  var slides = [
    () => {
      g.clear();
      g.setFont('6x8',2);
      g.setColor(1,1,1);
      g.drawString('Visit', 120, 80);
      g.drawString('nodewatch.dev', 120, 110);
      g.drawString('for info', 115, 140);
    },
    () => {
      g.clear();
      g.setFont('6x8',2);
      g.setColor(1,1,1);
      g.drawString('Remember', 120, 80);
      g.drawString('to charge', 120, 110);
      g.drawString('your watch!', 125, 140);
    },
    () => {
      g.clear();
      g.drawImage(c([0,8,12,14,255,14,12,8]),d,40);
      g.drawImage(c([0,8,12,14,255,14,12,8]),d,194);
      g.drawImage(c([0,8,12,14,255,14,12,8]),d,116);
      g.drawString('Menu Up', d - 50, 42);
      g.drawString('Select', d - 40, 118);
      g.drawString('Menu Down', d - 60, 196);
    }
  ];
  function next() {
    var n = slides.shift();
    n();
    g.drawImage(c([0,8,12,14,255,14,12,8]),d,116);
    slides.push(n);
  }
  return new Promise((res) => {
    next();
    var i = setInterval(next, 2000);
    setWatch(()=>{
      clearInterval(i);
      clearWatch();
      res();
    }, BTN2, {repeat:false});
  });
}

welcome()
  .then(logos)
  .then(info)
  .then(()=>E.showMessage('done'));


  });
}

function info() {
  var slides = [
    () => {
      g.clear();
      g.setFont('6x8',2);
      g.setColor(1,1,1);
      g.drawString('Visit', 120, 80);
      g.drawString('nodewatch.dev', 120, 110);
      g.drawString('for info', 115, 140);
    },
    () => {
      g.clear();
      g.setFont('6x8',2);
      g.setColor(1,1,1);
      g.drawString('Remember', 120, 80);
      g.drawString('to charge', 120, 110);
      g.drawString('your watch!', 125, 140);
    },
    () => {
    }
  ];
  function next() {
    var n = slides.shift();
    n();
    g.drawImage(c([0,8,12,14,255,14,12,8]),d,116);
    slides.push(n);
  }
  return new Promise((res) => {
    next();
    var i = setInterval(next, 2000);
    setWatch(()=>{
      clearInterval(i);
      clearWatch();
      res();
    }, BTN2, {repeat:false});
  });
}

welcome()
  .then(logos)
  .then(info)
  .then(cleanup)
  .then(load);
