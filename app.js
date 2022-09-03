// const loadNavbar = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
//     const data = await res.json();
//     displayNav(data.data.news_category);
// }
// const displayNav = navber => {
//     const navContainer = document.getElementById("nav-container");

//     navber.forEach(nav => {
//         const { category_id, category_name } = nav;
//         const li = document.createElement('li');
//         li.classList.add('nav-item')
//         li.innerHTML = `
//             <a onclick = loadAllNews('${category_id}')
//              class="nav-link fs-3" href="#">${category_name}</a>
//             `;
//         navContainer.appendChild(li);
//     })
// };
// //onclick = loadAllNews('${category_id}')
// // loadNavbar();


// const loadAllNews = async () => {
//     const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
//     const data = await res.json();
//     displayCardNews(data.data.category_id);
// }

// const displayCardNews = myNews => {
//     console.log(myNews);
//     const cardcontainer = document.getElementById('card-container');
//     myNews.forEach(news => {
//         const { title, details, author, thumbnail_url } = news;
//         const { img, name, published_date, total_view } = author;
//         const card = document.createElement('div');
//         card.classList.add('row')
//         card.innerHTML = `
//         < div class= "col-md-4" >
//            <img src="${thumbnail_url}" class="img-fluid rounded-start" alt="...">
//         </div>
//         <div class="col-md-8">=
//           <div class="card-body">
//               <h5 class="card-title fs-2">${title}</h5>
//               <p class="card-text fs-4">${details.length > 100 ? details.slice(0, 100) + '...' : details}</p>
//           </div>
//           <div id="author-container" class= "d-flex">
//           <div id= "author-img" class ="d-flex">
//             <img src = "${img}" class= "img-fluid" style ="height: 50px; alt= "...">
//               <div>
//                  <h6 class = "card-title mx-2"> ${name}</h6> <br>
//                  <h6 class = "mx-2">${published_date}</h6>
//               </div>
//           </div>
//           <div class = "col">${total_view ? total_view : 0}</div>

//             <div class = "col">
//                <button class = "btn btn-primary" type = "submit"> Details </button>
//             </div>
//           </div>
//         </div>
//         `;
//         cardcontainer.appendChild(card);
//     })
// }
// loadNavbar();

// // const displayCardNews = myNews => {
// //     const url = `https://openapi.programming-hero.com/api/news/category/'${myNews}'`;
// //     console.log(url);
// // }
// // loadNavbar();

