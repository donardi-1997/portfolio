const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('section');

function changeVisibility (entries) {
  entries.forEach( entrie => {
    const id = entrie.target.id;
    const buttonActive = document.querySelector(`a[href="#${id}"]`);
    if(entrie.isIntersecting){
      buttonActive.classList.add("active");
    } else {
      buttonActive.classList.remove("active");
    }
  })
}

const observer = new IntersectionObserver(changeVisibility, {
  threshold: 0.5
});

sections.forEach( section => {
  observer.observe(section);
})


