// scripts.js

document.getElementById('startButton').addEventListener('click', function() {
  // Hide the popup
  document.getElementById('popup').style.display = 'none';
  
  // Show the cake after popup disappears
  document.getElementById('cake').classList.remove('hidden');
  
  setTimeout(function() {
    // Show balloons after the cake
    document.getElementById('balloons').classList.remove('hidden');
  }, 3000); // 3 seconds delay for balloons to appear
  
  setTimeout(function() {
    // Show Talha Anjum message and animation after balloons
    document.getElement