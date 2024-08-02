import domGenerator from "dom-generator";
import axios from "axios";
import "./index.scss";

import buttonGenerator from "../buttonComponent/buttonComponent";
import inputGenerator from "../inputComponent/inputComponent";

/**
 * Fetches books data from the API and renders it in a table.
 * 
 * This function makes a GET request to the API endpoint to retrieve the list of books,
 * and then calls the `renderBookTable` function to display the books in a table format.
 * 
 * @async
 * @function fetchBooksAndRenderTable
 * @returns {Promise<void>} A promise that resolves when the table has been rendered.
 * @throws {Error} Throws an error if the API request fails.
 */



const apiUrl = "http://localhost:3000/books";




async function fetchBooksAndRenderTable() {
  try {
    const response = await axios.get(apiUrl);
    const books = response.data;
    renderBookTable(books);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

function deleteBook(bookId) {
  return axios.delete(`${apiUrl}/${bookId}`);
}

function editBook(bookId, updatedData) {
  return axios.put(`${apiUrl}/${bookId}`, updatedData);
}

function createBook(bookData) {
  return axios.post(apiUrl, bookData);
}

function renderBookTable(books) {
  const table = domGenerator({
    tag: "div",
    attributes: {
      class: "tableSectionWrapper",
    },
    children: [
      {
        tag: "h2",
        properties: { textContent: "Books Table" },
      },
      {
        tag: "table",
        attributes: { id: "tableSection" },
        children: [
          {
            tag: "thead",
            children: [
              {
                tag: "tr",
                children: [
                  { tag: "th", properties: { textContent: "ID" } },
                  { tag: "th", properties: { textContent: "Name" } },
                  { tag: "th", properties: { textContent: "Description" } },
                  { tag: "th", properties: { textContent: "Price" } },
                  { tag: "th", properties: { textContent: "Banner" } },
                  { tag: "th", properties: { textContent: "Date" } },
                  { tag: "th", properties: { textContent: "Genre" } },
                  {
                    tag: "th",
                    children: [
                      {
                        tag: buttonGenerator({
                          content: "+",
                          status: "primaryOrange",
                          color:'orange',
                          eventListeners: {
                            click: () => showAddBookForm(),
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
            children: books.map((book) => ({
              tag: "tr",
              children: [
                { tag: "td", properties: { textContent: book.id } },
                { tag: "td", properties: { textContent: book.name } },
                { tag: "td", properties: { textContent: book.description } },
                { tag: "td", properties: { textContent: book.price } },
                { tag: "td", properties: { textContent: book.banner } },
                { tag: "td", properties: { textContent: book.date } },
                { tag: "td", properties: { textContent: book.genre } },
                {
                  tag: "td",
                  children: [
                    {
                      tag: buttonGenerator({
                        content: "",
                        status: "edit",
                        iconStart:'/public/images/adminPage/edit_2.svg',
                        eventListeners: {
                          click: () => handleEditBook(book),
                        },
                      }),
                    },
                    {
                      tag: buttonGenerator({
                        content: "",
                        status: "deleted",
                        iconStart:'/public/images/adminPage/trash_2.svg',
                        eventListeners: {
                          click: () => handleDeleteBook(book.id),
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

  const container = document.getElementById("booksTableSection");
  container.innerHTML = "";
  container.appendChild(table);
}

function showAddBookForm() {
  const form = domGenerator({
    tag: "form",
    attributes:{id:'booksForm'},
    children: [
      {
        tag: "label",
        properties: { textContent: "Name:" },
        children: [
          {
            tag: inputGenerator({
              inputId:'bookName',
              placeholder:'',
              type:'text',
              size:'small',
              statues:'primary'
            }),
            attributes: { type: "text"},
          },
        ],
      },
      {
        tag: "label",
        properties: { textContent: "Description:" },
        children: [
          {
            tag: inputGenerator({
              inputId:'bookDescription',
              placeholder:'',
              type:'text',
              size:'small',
              statues:'primary'
            }),
            attributes: { type: "text"},
          },
        ],
      },
      {
        tag: "label",
        properties: { textContent: "Price:" },
        children: [
          {
            tag: inputGenerator({
              inputId:'bookPrice',
              placeholder:'',
              type:'number',
              size:'small',
              statues:'primary'
            }),
            attributes: { type: "number" },
          },
        ],
      },
      {
        tag: "label",
        properties: { textContent: "Banner:" },
        children: [
          {
            tag: inputGenerator({
              inputId:'bookBanner',
              placeholder:'',
              type:'text',
              size:'small',
              statues:'primary'
            }),
            attributes: { type: "text"},
          },
        ],
      },
      {
        tag: "label",
        properties: { textContent: "Date:" },
        children: [
          {
            tag: inputGenerator({
              inputId:'bookDate',
              placeholder:'',
              type:'date',
              size:'small',
              statues:'primary'
            }),
            attributes: { type: "date" },
          },
        ],
      },
      {
        tag: "label",
        properties: { textContent: "Genre:" },
        children: [
          {
            tag: inputGenerator({
              inputId:'bookGenre',
              placeholder:'',
              type:'text',
              size:'small',
              statues:'primary'
            }),
            attributes: { type: "text" },
          },
        ],
      },
      {
        tag: buttonGenerator({
          content: "Add Book",
          size: "medium",
          status: "primaryOrang",
          color:'orange',
          eventListeners: {
            click: (e) => {
              e.preventDefault();
              const bookName = document.getElementById("bookName").value.trim();
              const bookDescription = document.getElementById("bookDescription").value.trim();
              const bookPrice = document.getElementById("bookPrice").value.trim();
              const bookBanner = document.getElementById("bookBanner").value.trim();
              const bookDate = document.getElementById("bookDate").value.trim();
              const bookGenre = document.getElementById("bookGenre").value.trim();

              if (bookName && bookDescription && bookPrice && bookBanner && bookDate && bookGenre) {
                const bookData = {
                  name: bookName,
                  description: bookDescription,
                  price: bookPrice,
                  banner: bookBanner,
                  date: bookDate,
                  genre: bookGenre,
                };
                addBook(bookData);
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
  formContainer.setAttribute("id", "addBookForm");
  formContainer.appendChild(form);

  const tableContainer = document.getElementById("booksTableSection");
  tableContainer.innerHTML = "";
  tableContainer.appendChild(formContainer);
}

function addBook(bookData) {
  createBook(bookData)
    .then(() => {
      fetchBooksAndRenderTable();
      document.getElementById("addBookForm").innerHTML = ""; // Clear the form after adding book
    })
    .catch((error) => console.error("Error adding book:", error));
}

function handleDeleteBook(bookId) {
  if (confirm("Are you sure you want to delete this book?")) {
    deleteBook(bookId)
      .then(fetchBooksAndRenderTable)
      .catch((error) => console.error("Error deleting book:", error));
  }
}

function handleEditBook(book) {
  const newName = prompt("Enter new name:", book.name);
  const newDescription = prompt("Enter new description:", book.description);
  const newPrice = prompt("Enter new price:", book.price);
  const newBanner = prompt("Enter new banner:", book.banner);
  const newDate = prompt("Enter new date:", book.date);
  const newGenre = prompt("Enter new genre:", book.genre);

  if (newName && newDescription && newPrice && newBanner && newDate && newGenre) {
    editBook(book.id, {
      ...book,
      name: newName,
      description: newDescription,
      price: newPrice,
      banner: newBanner,
      date: newDate,
      genre: newGenre,
    })
      .then(fetchBooksAndRenderTable)
      .catch((error) => console.error("Error editing book:", error));
  }
}

export default fetchBooksAndRenderTable;
