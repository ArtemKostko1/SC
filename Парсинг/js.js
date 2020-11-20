async function getResponse() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  let content = await response.json();
  content = content.splice(0, 5);

  console.log(content);

  let ul = document.querySelector(".ul");

  let key;
  for (key in content) {
    ul.innerHTML += `
      <li class="ul">
        <h3><b>Имя:</b> ${content[key].name}</h3>
        <p><b>Никнэйм:</b> ${content[key].username}</p>
        <p><b>E-mail:</b> ${content[key].email}</p>
        <p><b>Адрес</b></p>
        <p><b>Город:</b> ${content[key].address.city}</p>
        <p><b>Улица:</b> ${content[key].address.street}</p>
        <p><b>Квартира:</b> ${content[key].address.suite}</p>
        <p><b>Телефон:</b> ${content[key].phone}</p>
        <p><b>Сайт:</b> ${content[key].website}</p>
        <p><b>Компания</b></p>
        <p><b>Название:</b> ${content[key].company.name}</p>
        <hr>
      </li>
    `;
  }
}

getResponse();
