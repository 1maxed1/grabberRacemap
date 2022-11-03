const reload = (callback) => {
  //Ruft die Funktion immer wieder aller 1 Sekunde auf
  setInterval(callback, 1000);
};

const returnEventID = () => {
  const Location = document.location;

  const queryParams = new URLSearchParams(Location.search);

  let eventId = "";

  if (queryParams != null) {
    for (const [key, value] of queryParams) {
      if (key == "eventId") {
        eventId = value;
        console.log([key, value]);
      } else {
        alert("Misinput at the query Params");
      }
    }
  }

  return eventId;
};

const createUrl = (eventId) => {
  return `https://racemap.com/api/data/v1/${eventId}/current`;
};

const requestData = async (url) => {
  //

  const request = await fetch(url);
  const toJSon = await request.json();
  let distanceArray = [];
  for (value of toJSon.starters) {
    if (value.current != null) {
      distanceArray.push(value.current.fromStart);
    }
  }
  let mostDistance = distanceArray[0];
  for (value in distanceArray) {
    if (value > mostDistance) {
      value = mostDistance;
    }
  }
  console.log(mostDistance);

  return mostDistance;
};

const modifyDataTags = (doubleValue) => {
  const tag = document.getElementById("went");
  tag.innerHTML = doubleValue;
};

const callbackFunction = (urlCreate) => {
  requestData(urlCreate).then((value) => modifyDataTags(value));
};

const urlCreate = createUrl(returnEventID());

reload(() => callbackFunction(urlCreate));
