const returnQueryParams = () => {
  const Location = document.location;
  //returns the id as an object of this
  const queryParams = new URLSearchParams(Location.search);

  let eventId = "";
  let anzahl = "";

  if (queryParams != null) {
    for (const [key, value] of queryParams) {
      //Here will be a few other security tags
      if (key == "eventId") {
        eventId = value;
      } else if (key == "anzahl") {
        anzahl = value;
      } else {
        alert("Misinput at the query Params");
      }
    }
  }

  return [eventId, anzahl];
};

const createUrl = (eventId) => {
  return `https://racemap.com/api/data/v1/${eventId}/ranks`;
};

const getLeaders = async (url) => {
  /**"starters" */
  let arrayRanks = [];
  const request = await fetch(url);
  const toJSon = await request.json();

  for (starter of toJSon.starters) {
    const rank = await starter.rank;
    const name = await starter.name;

    if (rank != -1) {
      const starterObject = createObject(rank, name);

      arrayRanks.push(starterObject);
    } else {
      const starterObject = createObject("Ausgeschieden", name);

      arrayRanks.push(starterObject);
    }
  }
  console.log(arrayRanks);
  return arrayRanks;
};

const reload = (callback) => {
  setInterval(callback, 1000);
};

const printOut = (value) => {
  console.log(value);
};

const createAnzahlPTags = (anzahl) => {
  for (let i = 0; i < anzahl; i++) {
    const tag = document.createElement("h1");
    tag.setAttribute("id", `${i + 1}`);
    const container = document.getElementById("container");
    container.appendChild(tag);
  }
};

const showToScreen = (starterobject, anzahl) => {
  for (let i = 0; i < anzahl; ++i) {
    let text = `${starterobject[i].Rank}: ${starterobject[i].Name}`;
    document.getElementById(`${i + 1}`).innerHTML = text;
  }
};

//simple function for creating an object that is stored inside arrayRanks
const createObject = (rank, name) => {
  let starterObject = {};
  starterObject["Rank"] = rank;
  starterObject["Name"] = name;
  return starterObject;
};

const callbackFunction = (urlCreate, anzahl) => {
  getLeaders(urlCreate).then((value) => showToScreen(value, anzahl));
};

const url = createUrl(returnQueryParams()[0]);
const anzahl = returnQueryParams()[1];
console.log(anzahl);
createAnzahlPTags(anzahl);
reload(() => callbackFunction(url, anzahl));
