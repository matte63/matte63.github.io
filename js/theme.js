document.body.onload = function() {
  let theme_saved = localStorage.getItem('theme');
  if (theme_saved != null)
    document.body.setAttribute('theme', theme_saved);
  let theme = document.createElement('button');
  theme.innerHTML = 'bubble_chart';
  theme.classList.add('icon');
  theme.style = 'position:fixed;bottom:16px;right:16px;';
  theme.onclick = function() {
    let theme_list = ['dark', 'light', 'indigo', 'coffee'];
    let theme_index = theme_list.indexOf(document.body.getAttribute('theme'));
    let theme_new = theme_list[(theme_index + 1) % theme_list.length];
    document.body.setAttribute('theme', theme_new);
    localStorage.setItem('theme', theme_new);

  };

  document.body.appendChild(theme);
};