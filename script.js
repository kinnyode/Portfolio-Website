const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('projectbox1-animation');
        entry.target.classList.add('cassets-animation');
        
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.projectbox1');
  viewbox.forEach(image => {
    observer.observe(image);


  


    
  const viewbox = document.querySelectorAll('.cassets');
  viewbox.forEach(image => {
    observer.observe(image);
  });

  

});
  