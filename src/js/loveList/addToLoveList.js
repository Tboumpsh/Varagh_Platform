import axios from "axios";

async function addToLoveList(bookId) {
  const {name:userName} = JSON.parse(localStorage.getItem("currentUser"));

  if (!userName) {
    console.error("No user logged in");
    return;
  }

  try {
    const { data: users } = await axios.get(
      `http://localhost:3000/user?name=${userName}`
    );
    if (users.length === 0) {
      console.error("User not found");
      return;
    }

    const user = users[0];
    const loveList = user.loveList || [];

    if (!loveList.includes(bookId)) {
      loveList.push(bookId);

      await axios.put(`http://localhost:3000/user/${user.id}`, {
        ...user,
        loveList,
      });

      console.log("Book added to love list");
    } else {
      console.log("Book already in love list");
    }
  } catch (error) {
    console.error("Error adding to love list:", error);
  }
}

export default addToLoveList;
