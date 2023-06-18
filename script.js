function loadNewPage(url) {
    window.location.href = url;
  }
  document.getElementById('myButton').addEventListener('click', function() {
    loadNewPage('http://example.com/newpage');
  });