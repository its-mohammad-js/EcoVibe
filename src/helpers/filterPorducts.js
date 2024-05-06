import { calculateAverage, isInArray } from "./constants";

export function filterProducts(products, filters) {
  // if filters are empty return products
  if (!filters) {
    return products;
  }

  // destructure filters object with deafult values
  const {
    category = "",
    tags = [],
    searchQuery = "",
    collections = [],
    productTypes = [],
    priceRange = { min: 0, max: 1000 },
    seller = "",
    selectedOptions = [],
    sortBy = "",
    relevant = "most",
    idList = [],
  } = filters;

  // Initialize an empty array to store the filtered products
  let filteredProducts = [];

  // Loop through each product in the products array
  for (let product of products) {
    // Initialize a boolean variable to store the match status
    let match = true;

    // Match if the product has the tags specified in the filters
    if (
      tags.length > 0 &&
      !product.Tags.some((tag) => filters.tags.includes(tag.toLowerCase()))
    ) {
      match = false;
    }

    // Match if the product has the category specified in the filters
    if (category !== "" && product.Category.toLowerCase() !== category) {
      match = false;
    }

    // Match if the product has the name specified in the filters
    if (
      searchQuery !== "" &&
      !product.Name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      match = false;
    }

    // Match if the product has the collection specified in the filters
    if (
      collections.length > 0 &&
      !collections.includes(product.Collection.toLowerCase())
    ) {
      match = false;
    }

    // Match if the product has the type specified in the filters
    if (
      productTypes.length > 0 &&
      !productTypes.includes(product.Type.toLowerCase())
    ) {
      match = false;
    }

    // Match if the product has the price specified in the filters
    if (
      priceRange.min > -1 &&
      priceRange.max > 0 &&
      (product.Price < priceRange.min || product.Price > priceRange.max)
    ) {
      match = false;
    }

    // check if seller is not selected go to next step
    if (
      seller != "" &&
      product.Seller.toLowerCase() !== seller[0].toLowerCase()
    ) {
      match = false;
    }

    // Check if the product has the options specified in the filters
    if (selectedOptions.length > 0 && product.Options) {
      // check product options
      const matchedProducts = product.Options.some(({ title, options }) => {
        // return true if product have selected option
        return selectedOptions.some(
          (option) =>
            option.title.toLowerCase() === title.toLowerCase() &&
            options.some((opt) => {
              return opt.toLowerCase() === option.selectedOption.toLowerCase();
            })
        );
      });
      // // only return product with selected options
      if (!matchedProducts) match = false;
    }

    if (idList.length && idList && !isInArray(idList, product?.id)) {
      match = false;
    }

    // If the match variable is still true after checking all the filters, push the product to the filteredProducts array
    if (match) {
      filteredProducts.push(product);
    }
  }

  // Sort the filteredProducts array according to the filters.sortBy property
  if (sortBy !== "") {
    filteredProducts = filteredProducts.sort((productA, productB) => {
      switch (sortBy) {
        case "Popular":
          return (
            calculateAverage(productB.Stars) - calculateAverage(productA.Stars)
          );
        case "High To Low":
          return Number(productB.Price) - Number(productA.Price);
        case "Low To High":
          return Number(productA.Price) - Number(productB.Price);
        case "Best Sell":
          return productA.Tags.find((tag) => tag.toLowerCase() === "trend");
        default:
          return productA;
      }
    });
  }

  if (relevant) {
    switch (relevant) {
      case "most":
        return filteredProducts;
      case "least":
        return filteredProducts.reverse();
      default:
        break;
    }
  }

  if (!products.length) {
    throw new Error(
      "Uh oh! We can't seem to connect. Try refreshing the page."
    );
  }

  return filteredProducts;
}
