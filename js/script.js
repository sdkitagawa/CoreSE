document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  }
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    if (newTheme === 'dark') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', 'light');
    }
    
    localStorage.setItem('theme', newTheme);
  });
  
  const hamburgerCheckbox = document.getElementById('hamburger-toggle');
  const navLinks = document.querySelectorAll('#navbar a');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 996) {
        hamburgerCheckbox.checked = false;
      }
    });
  });
  
  document.querySelectorAll('.copy-button').forEach(function(button) {
    button.addEventListener('click', function() {
      const wrapper = button.closest('.code-block-wrapper');
      const codeElement = wrapper.querySelector('code');
      const text = codeElement.textContent;
      
      navigator.clipboard.writeText(text).then(function() {
        button.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>';
        button.classList.add('copied');
        
        setTimeout(function() {
          button.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>';
          button.classList.remove('copied');
        }, 2000);
      });
    });
  });
});