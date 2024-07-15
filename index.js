const playerElement = document.getElementById(`player`);
console.log(playerElement);

const getPlayers = async () => {
  const grab = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players"
  );
  const responseJson = await grab.json();
  renderPlayers(responseJson.data.players);
};

getPlayers();

const renderPlayers = (players) => {
  console.log(players);
  players.forEach((player) => {
    const name = document.createElement(`h2`);
    name.innerText = player.name;
    playerElement.append(name);

    const breed = document.createElement(`p`);
    breed.innerText = `Breed: ` + player.breed;
    playerElement.append(breed);

    const status = document.createElement(`p`);
    status.innerText = `Status: ` + player.status;
    playerElement.append(status);

    const teamId = document.createElement(`p`);
    teamId.innerText = `Team ID: ` + player.teamId;
    playerElement.append(teamId);

    const cohortId = document.createElement(`p`);
    cohortId.innerText = `Cohort ID: ` + player.cohortId;
    playerElement.append(cohortId);
  });
};
