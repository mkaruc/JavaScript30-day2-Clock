const secondHand = document.querySelector('.sec');
  const minuteHand = document.querySelector('.min');
  const hourHand = document.querySelector('.hour');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds*6)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minsDegrees = (minutes*6)+90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();