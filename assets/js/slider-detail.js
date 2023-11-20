function toggleExpand() {
    var content = document.querySelector('.overflow-hidden');
    var btn = document.querySelector('.expandable-btn');

    content.classList.toggle('max-h-0');
    content.classList.toggle('max-h-100');

    btn.classList.toggle('expanded');

    var isExpanded = content.classList.contains('max-h-100');

    if (isExpanded) {
      btn.querySelector('.more').style.display = 'none';
      btn.querySelector('.less').style.display = 'inline';
    } else {
      btn.querySelector('.more').style.display = 'inline';
      btn.querySelector('.less').style.display = 'none';
    }
  }