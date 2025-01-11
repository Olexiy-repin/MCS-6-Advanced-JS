function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const sections = document.querySelectorAll('.sec');

sections.forEach(sec => {
  const randomColor = getRandomColor();

  sec.style.backgroundColor = randomColor;
});

const observedEl = document.querySelector('.js-observered');

const observerCallBack = entries => {
  if (entries[0].isIntersecting) {
    console.log('Hello');
  }
};

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 200px 0px',
  threshold: 1,
};

const observerInstance = new IntersectionObserver(observerCallBack, observerOptions);

observerInstance.observe(observedEl);
