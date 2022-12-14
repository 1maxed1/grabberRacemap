//Tags that display the wanted data

//Racemap test Id --> 61a21210e5d45d000199f7d9

const reload = (callback) => {
  //Ruft die Funktion immer wieder aller 1 Sekunde auf
  setInterval(callback, 1000);
};

const returnEventID = () => {
  const Location = document.location;
  //returns the id as an object of this
  const queryParams = new URLSearchParams(Location.search);

  let eventId = "";

  if (queryParams != null) {
    for (const [key, value] of queryParams) {
      //Here will be a few other security tags
      if (key == "eventId") {
        eventId = value;
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
  const request = await fetch(url);
  const toJSon = await request.json();
  let distanceArray = [];
  for (value of toJSon.starters) {
    if (value.current != null) {
      distanceArray.push(value.current.toFinish);
    }
  }
  let smallestDistance = distanceArray[0];
  for (value in distanceArray) {
    if (value < smallestDistance) {
      value = smallestDistance;
    }
  }
  console.log(smallestDistance);

  return smallestDistance;
};

const modifyDataTags = (doubleValue) => {
  const tag = document.getElementById("toGo");
  tag.innerHTML = doubleValue;
};

const callbackFunction = (urlCreate) => {
  requestData(urlCreate).then((value) => modifyDataTags(value));
};

const urlCreate = createUrl(returnEventID());

reload(() => callbackFunction(urlCreate));
