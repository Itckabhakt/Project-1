document.addEventListener("DOMContentLoaded", function() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('class', 'embed-responsive-item');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', 'https://nowmesports.com/live-tv/astrocricket.php');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('style', 'width: 100%; height: 210px;');
  document.body.appendChild(iframe);

  var div = document.createElement('div');
  div.setAttribute('style', 'background-color: #0074d9; text-align: center; padding: 10px;');
  var a = document.createElement('a');
  a.setAttribute('href', 'https://t.me/FinallyliveStreaming');
  a.setAttribute('style', 'text-decoration: none;');
  var button = document.createElement('button');
  button.setAttribute('style', 'background-color: #fff; color: #0074d9; border: 2px solid #0074d9; padding: 5px 10px;');
  button.textContent = 'Join Telegram';
  a.appendChild(button);
  div.appendChild(a);
  document.body.appendChild(div);
});

  if(confirm("Join Our Telegram Channel @finallylivestreaming")) { window.location.href = "https://t.me/FinallyliveStreaming" }
