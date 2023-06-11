const directors = [
    {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссер, Актер, Сценарист, Монтажер',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
},
    {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссер, Оператор, Монтажер, Актер, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
},
    {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссер, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
},
    {
    name: 'Алексей Балабанов',
    career: 'Режиссер, Сценарист, Актер, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
},
    {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссер, Сценарист, Актер',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зеленая книга'
},
    {
    name: 'Юрий Быков',
    career: 'Актер, Режиссер, Сценарист, Композитор, Монтажер, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
},
    {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажер, Актер, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
    },
];

directors.forEach((director) => {
    let card = `<section class="director_card">
    <p class="director_name">${director.name}</p>
    <p class="director_career">${director.career}</p>
    <a href="${director.films}">Фильмография</a>
    </section>`

    const element = document.createElement('div');
    element.innerHTML = card;

    let main = document.querySelector('main');
    main.append(element);
});

const arr = directors.map(function (item) {
    return item = 'top_rated_film';

    let filmsList = `<p class="top_rated_film">${arr}Лучшие фильмы режиссеров</p>`;

    const topFilmsList = document.createElement('div');
    topFilmsList.innerHTML = filmsList;

    let footer = document.querySelector('footer');
    footer.append(topFilmsList);
});

// console.log(arr);

// let filmsList = `<p class="top_rated_film">${arr}Лучшие фильмы режиссеров</p>`;

// const topFilmsList = document.createElement('div');
// topFilmsList.innerHTML = filmsList;





