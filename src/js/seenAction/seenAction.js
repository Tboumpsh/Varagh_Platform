import "/Lib/silverBox/silverBox.min.scss";

import silverBox from "/Lib/silverBox/silverBox.min";

/**
 * Displays a notification using silverBox and plays an audio file a specified number of times.
 * 
 * This function uses the `silverBox` library to show a notification with a custom message and icon. It also 
 * plays a specified audio file a certain number of times. The notification will be displayed for 5 seconds.
 * 
 * **Notification Details:**
 * - **Icon:** Custom GIF icon (`/public/images/mobile-girl-mim.gif`).
 * - **Title Text:** A message expressing the designers' reluctance to track user interactions on the page.
 * - **Duration:** The notification will be displayed for 5 seconds.
 * 
 * **Audio Playback:**
 * - The audio file (`/public/music/khandeh.mp3`) will be played repeatedly up to the specified count.
 * - The playback is managed by a counter (`playCount`) to track the number of times the audio has been played.
 * 
 * **Event Handling:**
 * - An `ended` event listener is used to increment the play count and trigger the next playback if the count 
 *   limit has not been reached.
 * 
 * **Error Handling:**
 * - If there is an error while playing the audio, it is logged to the console.
 * 
 * @function seenAction
 * @param {number} count - The number of times the audio should be played.
 * 
 * @returns {void} This function does not return a value. It performs side effects such as displaying a notification
 * and playing audio.
 */


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