function startCountdown() {
  const newYearDate = new Date("January 1, 2025 00:00:00"); // Установите дату события

  function updateCountdown() {
    const now = new Date();
    const timeDifference = newYearDate - now;

    if (timeDifference <= 0) {
      document.getElementById("seсtion_timer").innerHTML = "Событие наступило!";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  const countdownInterval = setInterval(updateCountdown, 1000); // Обновление каждую секунду
  updateCountdown(); // Первоначальный вызов для отображения данных сразу
}

startCountdown();
