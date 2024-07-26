import "/Lib/silverBox/silverBox.min.scss";

import silverBox from "/Lib/silverBox/silverBox.min";

function seenAction(count) {
  silverBox({
    timer: 5000,
    customIcon: "/public/images/mobile-girl-mim.gif",
    title: {
      text: "کاربر عزیز، ما طراح‌ها شما رو دوست نداریم.لطفا روی هر دکمه که میبینید کلیک نکنید. ما برای طرح های خودمونم برنامه نداریم؛پس نمیتونیم به فکر روند حرکتی شما در صفحه باشیم.",
    },
    centerContent: true,
  });

  const audio = new Audio("/public/music/khandeh.mp3");

  // شمارنده برای تعداد دفعات پخش
  let playCount = 0;

  // تعریف یک فانکشن برای پخش صدا و افزایش شمارنده
  function playAudio() {
    if (playCount < count) {
      audio.play().catch(error => {
        console.error("Error playing the audio:", error);
      });
    }
  }

  // رویداد برای زمان اتمام پخش صدا
  audio.addEventListener('ended', () => {
    playCount++;
    if (playCount < count) {
      playAudio();
    }
  });

  // شروع پخش صدا
  playAudio();
}
export default seenAction