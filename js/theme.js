document.body.onload = function() {
  let theme = document.createElement('button');
  theme.innerHTML = 'bubble_chart';
  theme.classList.add('icon');
  theme.onclick = function() {
    switch (document.body.getAttribute('theme')) {
      case 'light':
        document.body.setAttribute('theme', 'dark');
        break;
      case 'dark':
        document.body.setAttribute('theme', 'coffee');
        break;
      case 'coffee':
        document.body.setAttribute('theme', 'indigo');
        break;
      case 'indigo':
        document.body.setAttribute('theme', 'light');
        break;
      default:
        document.body.setAttribute('theme', 'light');
    }
  };

  document.body.appendChild(theme);
};