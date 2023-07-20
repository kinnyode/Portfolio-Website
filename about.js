const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('threeboxes-animation');
        
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.threeboxes');
  viewbox.forEach(image => {
    observer.observe(image);

});