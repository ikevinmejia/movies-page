
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': '56c6f7b52bmsh42a917b6b4bca46p1b5bdejsnd400a5ca7399'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=avengers', options)
	.then(response => response.json())
	.then(data =>{
        console.log(data);
          const arrayMovies = data.d;
          arrayMovies.map((element) => {
              const title = element.l;
              const image = element.i.imageUrl;
              const cast = element.s;

              /* const poster = `
                <div>
                    <img src="${image}" width="200px  ">
                    <h2>${title}</h2>
                    <small>${cast}</small>
                </div>
              `; */
               /* const poster = `
                    <img src="${image}" width="200px">
              `;

              document.querySelector('.slider__image__container').innerHTML += poster; */
          })
    })
	.catch(err => console.error(err));


