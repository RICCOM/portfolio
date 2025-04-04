// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    html.classList.toggle('dark');
    document.getElementById('theme-icon').className = `fas ${isDark ? 'fa-moon' : 'fa-sun'} text-xl`;
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  }
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.getElementById('theme-icon').className = 'fas fa-sun text-xl';
  }
  
  // Mobile Menu Toggle
  function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    menu.classList.toggle('hidden');
    icon.className = `fas ${menu.classList.contains('hidden') ? 'fa-bars' : 'fa-times'}`;
  }
  
  // Scroll to Section
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Form Submission Handler
  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
      timestamp: new Date().toISOString()
    };
    
    // Save to "database"
    saveMessage(formData);
  
    // Show success modal
    const modal = document.getElementById('success-modal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('hidden'), 3000);
  
    // Reset form
    document.getElementById('contact-form').reset();
  }