import axios from "axios";

// import renderLandingPage from "../../pages/landingPage/renderLandingPage";
import renderLandingPage from "../../pages/landingPage/renderLandingPage";
import renderAdminPage from "../../pages/adminPage/renderingAdminPage";

async function checkUserAndRender() {
  const userName = localStorage.getItem("currentUser");

  if (userName) {
    try {
      const response = await axios.get(
        `http://localhost:3000/user?name=${userName}`
      );
      const users = response.data;

      if (users.length > 0) {
        const user = users[0];

        if (user.role === "admin") {
          renderAdminPage();
        } else {
          renderLandingPage();
        }
      } else {
        renderLandingPage();
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      renderLandingPage();
    }
  } else {
    // کاربری وارد نشده است، نمایش صفحه لندینگ
    renderLandingPage();
  }
}

export default checkUserAndRender;
