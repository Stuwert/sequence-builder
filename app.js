dragula([document.querySelector('nav'), document.querySelector('main')],{
  copy: function(el, target){
    return el.parentElement.tagName === 'MAIN' ? false : true
  },
  accepts: function(el, target){
    return target.tagName === 'MAIN' ? true : false;
  }

})
