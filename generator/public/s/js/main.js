(function() {
  var sidebarElement = document.querySelector('.sidebar');

  if (sidebarElement) {
    sidebarElement.scrollTop = sessionStorage.getItem('sidebar.scrollTop') || 0;
    sidebarElement.onscroll = function(evt) {
      sessionStorage.setItem('sidebar.scrollTop', sidebarElement.scrollTop);
    };
  }
})();
