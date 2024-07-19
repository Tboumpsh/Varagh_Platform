import axios from "axios";

async function changeProfiles() {
    const profileDiv = document.getElementById('profileDiv');
    const fileInput = document.getElementById('fileInput');
    const saveButton = document.querySelector('.saveButton');
   

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const userName = user?.username;

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
