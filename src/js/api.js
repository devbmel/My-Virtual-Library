async function getBookDataByTitle(title) {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}`
    );
    if (!response.ok) {
      throw new Error("Le livre n'a pas pu être recupéré");
    }
    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error(error);
  }
}
