document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript loaded');

  const form = document.querySelector('#new-submit-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const height = event.target.height.value;
    const country = event.target.country.value;
    const continent = event.target.continent.value;
    const ascent = event.target.ascent.value;

    const newListItem = document.createElement('li');
    newListItem.textContent =

    `Name: ${name},
    Height in Meters: ${height},
    Country: ${country},
    Continent: ${continent},
    First Ascent: ${ascent}`;
    newListItem.classList.add('each-item');
    const mountainList = document.querySelector('#mountain-list');
    mountainList.appendChild(newListItem);
    form.reset()
  })

  const deleteAll = document.getElementById('delete_all');
    deleteAll.addEventListener('click', (event) => {
      event.preventDefault();
      const parent = document.getElementById('mountain-list');
      while (parent.firstChild) {
        parent.firstChild.remove();
      };
  });




})
