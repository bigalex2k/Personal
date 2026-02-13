function getPokemon() {
const name = document.getElementById('pokemonName').value.toLowerCase();
    fetched = true;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(function(response) {
            if (!response.ok) {
                document.getElementById('pokemonData').innerHTML = `
                <p>Couldn't Retrieve Data</p>
                `
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })
        .then(function(data) {
            document.getElementById('pokemonData').innerHTML = `
            <img src = "${data.sprites.front_default}">
            <audio controls autoplay>
                <source src="${data.cries.latest}" type="audio/ogg">
            </audio>
            `;
        })
        .catch(function(error) {
            console.log(error);
        });
}