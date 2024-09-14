window.onload = function() {
  const url = window.location.pathname;
  
  if (url.includes('index.html')) {
      alert("Welcome to the home page!");
      alert("if you can't see background image UC blocked it")
  } else if (url.includes('Hobbies.html')) {
      alert("Hello, this is the hobbies page!");
  } else if (url.includes('Gallery.html')) {
      alert("Check out my gallery!");
  }
};
