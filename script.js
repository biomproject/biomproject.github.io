/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

var x = 0;
var y = 0;

function makeTransform() {
  return 'translate(' + x + 'px, ' + y + 'px)';
}

function createBlob() {
  var blobs = document.getElementById('blobs');
  var blob = document.createElement('div');
  blob.classList.add('blob');
  blobs.appendChild(blob);
  blob.style.transform = makeTransform();

  
  if (Math.random() > 0.5) {
    x += 150;
  } else {
    y += 150;
  }

  setTimeout(function() {
    blob.style.transform = makeTransform();
  }, 100);
}

createBlob();
setInterval(createBlob, 5000);
