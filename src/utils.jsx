const url = "https://yoobee-express.herokuapp.com";

// don't add public on the end
const images_folder = url + "/";
const show_all_writers = url + "/api/writers";
const show_all_books = url + "/api/books";

// POST
const add_book = url + "/api/books";

// POST
const add_writer = url + "/api/writers";

// POST
const post_comment = url + "/api/comments";

export {
  url,
  show_all_writers,
  show_all_books,
  add_writer,
  add_book,
  post_comment,
  images_folder
};
