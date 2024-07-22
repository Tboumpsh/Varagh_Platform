import domGenerator from "dom-generator";
import axios from "axios";
import "./index.scss";

import buttonGenerator from "../buttonComponent/buttonComponent";

const apiUrl = "http://localhost:3000/user";

/**
 * Fetches users from the API and renders the user table.
 * @async
 * @function fetchUsersAndRenderTable
 * @returns {Promise<void>}
 */

async function fetchUsersAndRenderTable() {
  try {
    const response = await axios.get(apiUrl);
    const users = response.data;
    renderUserTable(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

/**
 * Deletes a user from the API.
 * @function deleteUser
 * @param {number|string} userId - The ID of the user to delete.
 * @returns {Promise<void>}
 */

function deleteUser(userId) {
  return axios.delete(`${apiUrl}/${userId}`);
}

/**
 * Edits a user in the API.
 * @function editUser
 * @param {number|string} userId - The ID of the user to edit.
 * @param {Object} updatedData - The updated user data.
 * @param {string} updatedData.name - The updated name of the user.
 * @param {string} updatedData.password - The updated password of the user.
 * @param {string} updatedData.profile - The updated profile of the user.
 * @param {string} updatedData.membership - The updated membership status of the user.
 * @returns {Promise<void>}
 */

function editUser(userId, updatedData) {
  return axios.put(`${apiUrl}/${userId}`, updatedData);
}

/**
 * Creates a new user in the API.
 * @function createUser
 * @param {Object} userData - The data of the new user.
 * @param {string} userData.name - The name of the new user.
 * @param {string} userData.password - The password of the new user.
 * @param {string} userData.profile - The profile of the new user.
 * @param {string} userData.membership - The membership status of the new user.
 * @returns {Promise<void>}
 */

function createUser(userData) {
  return axios.post(apiUrl, userData);
}

function renderUserTable(users) {
  const tableU = domGenerator({
    tag: "div",
    attributes: {
      class: "tableSectionUWrapper",
    },
    children: [
      {
        tag: "h2",
        properties: { textContent: "Users Table" },
      },
      {
        tag: "table",
        attributes: { id: "tableUSection" },
        children: [
          {
            tag: "thead",
            children: [
              {
                tag: "tr",
                children: [
                  { tag: "th", properties: { textContent: "ID" } },
                  { tag: "th", properties: { textContent: "Name" } },
                  { tag: "th", properties: { textContent: "Password" } },
                  { tag: "th", properties: { textContent: "Profile" } },
                  { tag: "th", properties: { textContent: "Membership" } },
                  {
                    tag: "th",
                    children: [
                      {
                        tag: buttonGenerator({
                          content: "+",
                          size: "extraSmall",
                          status: "primaryOrange",
                          eventListeners: {
                            click: () => showAddUserForm(),
                          },
                        }),
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            tag: "tbody",
            children: users.map((user) => ({
              tag: "tr",
              children: [
                { tag: "td", properties: { textContent: user.id } },
                { tag: "td", properties: { textContent: user.name } },
                { tag: "td", properties: { textContent: user.password } },
                { tag: "td", properties: { textContent: user.profile } },
                { tag: "td", properties: { textContent: user.membership } },
                {
                  tag: "td",
                  children: [
                    {
                      tag: buttonGenerator({
                        content: "Edit",
                        status: "edit",
                        eventListeners: {
                          click: () => handleEditUser(user),
                        },
                      }),
                    },
                    {
                      tag: buttonGenerator({
                        content: "Delete",
                        status: "delete",
                        eventListeners: {
                          click: () => handleDeleteUser(user.id),
                        },
                      }),
                    },
                  ],
                },
              ],
            })),
          },
          { tag: "tfoot" },
        ],
      },
    ],
  });

  const containerU = document.getElementById("userTableSection");
  containerU.innerHTML = "";
  containerU.prepend(tableU);
}

function showAddUserForm() {
  const form = domGenerator({
    tag: "form",
    children: [
      {
        tag: "label",
        properties: { textContent: "Name:" },
        children: [
          {
            tag: "input",
            attributes: { type: "text", id: "userName" },
          },
        ],
      },
      {
        tag: "label",
        properties: { textContent: "Password:" },
        children: [
          {
            tag: "input",
            attributes: { type: "password", id: "userPassword" },
          },
        ],
      },
      {
        tag: "label",
        properties: { textContent: "Profile:" },
        children: [
          {
            tag: "input",
            attributes: { type: "text", id: "userProfile" },
          },
        ],
      },
      {
        tag: "label",
        properties: { textContent: "Membership:" },
        children: [
          {
            tag: "input",
            attributes: { type: "text", id: "userMembership" },
          },
        ],
      },
      {
        tag: buttonGenerator({
          content: "Add User",
          size: "medium",
          status: "primaryBlue",
          eventListeners: {
            click: (e) => {
              e.preventDefault();
              const userName = document.getElementById("userName").value.trim();
              const userPassword = document
                .getElementById("userPassword")
                .value.trim();
              const userProfile = document
                .getElementById("userProfile")
                .value.trim();
              const userMembership = document
                .getElementById("userMembership")
                .value.trim();

              if (userName && userPassword && userProfile && userMembership) {
                const userData = {
                  name: userName,
                  password: userPassword,
                  profile: userProfile,
                  membership: userMembership,
                };
                addUser(userData);
              } else {
                alert("Please fill in all fields.");
              }
            },
          },
        }),
      },
    ],
  });

  const formContainer = document.createElement("div");
  formContainer.setAttribute("id", "addUserForm");
  formContainer.append(form);

  const tableContainerU = document.getElementById("userTableSection");
  tableContainerU.innerHTML = "";
  tableContainerU.append(formContainer);
}

/**
 * Adds a new user by sending a POST request to the API.
 * @function addUser
 * @param {Object} userData - The data of the new user.
 * @param {string} userData.name - The name of the new user.
 * @param {string} userData.password - The password of the new user.
 * @param {string} userData.profile - The profile of the new user.
 * @param {string} userData.membership - The membership status of the new user.
 */

function addUser(userData) {
  createUser(userData)
    .then(() => {
      fetchUsersAndRenderTable();
      document.getElementById("addUserForm").innerHTML = ""; // Clear the form after adding user
    })
    .catch((error) => console.error("Error adding user:", error));
}

function handleDeleteUser(userId) {
  if (confirm("Are you sure you want to delete this user?")) {
    deleteUser(userId)
      .then(fetchUsersAndRenderTable)
      .catch((error) => console.error("Error deleting user:", error));
  }
}

/**
 * Handles the editing of a user.
 * @function handleEditUser
 * @param {Object} user - The user object to edit.
 * @param {number|string} user.id - The ID of the user.
 * @param {string} user.name - The name of the user.
 * @param {string} user.password - The password of the user.
 * @param {string} user.profile - The profile of the user.
 * @param {string} user.membership - The membership status of the user.
 */

function handleEditUser(user) {
  const newName = prompt("Enter new name:", user.name);
  const newPassword = prompt("Enter new password:", user.password);
  const newProfile = prompt("Enter new profile:", user.profile);
  const newMembership = prompt("Enter new membership:", user.membership);

  if (newName && newPassword && newProfile && newMembership) {
    editUser(user.id, {
      ...user,
      name: newName,
      password: newPassword,
      profile: newProfile,
      membership: newMembership,
    })
      .then(fetchUsersAndRenderTable)
      .catch((error) => console.error("Error editing user:", error));
  }
}

export default fetchUsersAndRenderTable;
