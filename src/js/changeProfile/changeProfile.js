import axios from "axios";

/**
 * Handles the process of updating a user's profile image.
 * 
 * This asynchronous function performs the following actions:
 * 1. Retrieves the current user's name from local storage.
 * 2. Fetches the user data from the server based on the retrieved username.
 * 3. Sets up event listeners for:
 *    - Clicking on the profile div to trigger a file input dialog.
 *    - Changing the file input to preview the selected image.
 *    - Clicking the save button to upload the selected image as the new profile image.
 * 4. Updates the profile image of the user on the server and handles success and error responses.
 * 
 * The function assumes that the following DOM elements exist:
 * - A div with ID 'profileDiv' for displaying and selecting the profile image.
 * - An input element with ID 'fileInput' for selecting the image file.
 * - A button with class 'saveButton' for saving the updated profile image.
 * 
 * @async
 * @function changeProfiles
 * @returns {Promise<void>} A promise that resolves when the profile update process is completed, 
 *     or rejects if an error occurs during fetching or saving profile data.
 * 
 * @throws {Error} Throws an error if there is an issue with fetching user data from the server,
 *     or if there is a problem saving the updated profile image.
 */

async function changeProfiles() {
    const profileDiv = document.getElementById('profileDiv');
    const fileInput = document.getElementById('fileInput');
    const saveButton = document.querySelector('.saveButton');
   

    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);
    const userName = user?.name;

    if (!userName) {
        alert('کاربر یافت نشد. لطفاً وارد حساب کاربری خود شوید.');
        return;
    }

    try {
        const response = await axios.get(`http://localhost:3000/user?name=${userName}`);
        const users = response.data;
      

        if (users.length === 0) {
            alert('کاربر یافت نشد');
            return;
        }
        const user = users[0];
        const userId = user.id;
        console.log(userId);
     

        if (user.profile) {
            profileDiv.style.backgroundImage = `url(${user.profile})`;
        }

        profileDiv.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    profileDiv.style.backgroundImage = `url(${e.target.result})`;
                    profileDiv.dataset.imageData = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        saveButton.addEventListener('click', async () => {
            const imageData = profileDiv.dataset.imageData;
            if (imageData) {
                try {
                    const patchResponse = await axios.patch(`http://localhost:3000/user/${userId}`, 
                        { profile: imageData },
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    );
                    console.log('PATCH request successful', patchResponse);
                    alert('پروفایل با موفقیت ثبت شد');
                } catch (error) {
                    console.log(error);
                    alert('خطایی در ذخیره‌سازی پروفایل رخ داد');
                }
            } else {
                alert('ابتدا تصویری انتخاب کنید');
            }
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        alert('خطایی در دریافت پروفایل کاربر رخ داد');
    }
}

export default changeProfiles;
