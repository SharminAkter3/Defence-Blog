const loadNavbar = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    displayNav(data.data.news_category);
}
const displayNav = navber => {
    const navContainer = document.getElementById("nav-container");

    navber.forEach(nav => {
        const { category_name } = nav;
        const li = document.createElement('li');
        li.classList.add('nav-item')
        li.innerHTML = `
            <a class="nav-link fs-3" href="#">${category_name}</a>
            `;

        navContainer.appendChild(li);
    })
};

loadNavbar();



