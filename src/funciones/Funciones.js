
export const getData = () =>{

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dee69eb0a3msh87f0a98ed1f2c8dp18d519jsn7166d29149fc',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };

 return fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then((data)=> data.results)
    .catch(err => console.error(err));


}