// add / remove an specific element from array (without mutation)
export const toggleElementInArray = (array = [], element) => {
  // find index of specific element
  const indexOfEl = array.findIndex((item) => item === element);
  // clone of original array
  let updateArray = [...array];
  // toggle (add / remove) element from clone array
  if (indexOfEl === -1) {
    updateArray.push(element);
  } else {
    updateArray.splice(indexOfEl, 1);
  }
  // return updated clone array
  return updateArray;
};

// check array for specific element (it also useable for array of objects (simple object without method or dom element))
export const isInArray = (array, element) => {
  if (!array || !element) return;
  else {
    const indexEl = array.findIndex(
      (el) =>
        JSON.stringify(el).toLocaleLowerCase() ===
        JSON.stringify(element).toLocaleLowerCase()
    );

    return indexEl !== -1;
  }
};

// create a fake array (useful for loading components)
export const fakeArray = (length) => {
  var numberArray = [];
  for (var i = 0; i < length; i++) {
    numberArray.push(i);
  }
  return numberArray;
};

// paginate product (useable for any array)
export function paginateElements(products, divideTo) {
  const pageSize = divideTo;
  const numberOfPages = Math.ceil(products.length / pageSize);

  const paginatedProducts = [];
  for (let i = 0; i < numberOfPages; i++) {
    const startIndex = i * pageSize;
    const endIndex = startIndex + pageSize;

    const pageProducts = products.slice(startIndex, endIndex);
    paginatedProducts.push({
      items: pageProducts,
      page: i + 1,
    });
  }

  return paginatedProducts;
}

// validate location
export async function validateLocation(lat, lng) {
  try {
    // get location information from api
    const res = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C${lng}&key=7824a4d19fa84afab5426170dc768cef`
    ).then((res) => res.json());
    // validate location
    if (
      res.results[0].distance_from_q.meters > 0 &&
      res.results[0].components._type !== "body_of_water"
    ) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export function scrollContainer(direction, container) {
  container.classList.add("scroll-smooth");
  switch (direction) {
    case "right":
      container.scrollLeft += 200;
      break;
    case "left":
      container.scrollLeft -= 200;
      break;
  }
  container.classList.remove("scroll-smooth");
}

export function checkUserAuthentication(auth_status) {
  switch (auth_status) {
    case 200:
      break;
    case 204:
      throw Error("Please try again a few seconds later or refresh page");
    case 401:
      throw Error("You Have To Sign-up First...");
  }
}

// convert time stamp to local date string
export function timestampToDate(
  timestamp,
  selectedOptions,
  type = "firestore"
) {
  // default date structure
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  // transform time state to data object
  const date =
    type === "firestore"
      ? new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6)
      : new Date(timestamp);
  // return time stamp as a date with custom or default structure
  return date.toLocaleDateString("en-US", selectedOptions || options);
}

// genrate a unique id
export function generateId(baseId = "") {
  return `${baseId}` + `${Date.now()}` + `${Math.random()}`;
}

// get average of an array
export function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, curr) => Number(acc) + Number(curr), 0);

  const count = numbers.length;

  const average = Math.round(sum / count);

  return average;
}
