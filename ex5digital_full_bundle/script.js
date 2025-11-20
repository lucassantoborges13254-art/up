
document.addEventListener('DOMContentLoaded', function(){
  // simple stagger for numbers
  document.querySelectorAll('.num').forEach(function(el,i){
    el.style.animation = 'fadeUp .5s forwards';
    el.style.animationDelay = (i * 0.08) + 's';
    el.style.opacity = 0;
  });
});
