export function filterProducts(products, filters) {
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
    priceRange = { min: 0, max: 0 },
    seller = "",
    selectedOptions = [],
  } = filters;

  // Initialize an empty array to store the filtered products
  let filteredProducts = [];

  // Loop through each product in the products array
  for (let product of products) {
    // Initialize a boolean variable to store the match status
    let match = true;

    // Check if the product has the tags specified in the filters
    // If the filters.tags array is not empty, use the some() method to check if any of the product tags matches any of the filter tags
    // If none of the product tags matches any of the filter tags, set the match variable to false
    if (
      tags.length > 0 &&
      !product.Tags.some((tag) => filters.tags.includes(tag))
    ) {
      match = false;
    }

    // Check if the product has the category specified in the filters
    // If the filters.category is not an empty string, compare it with the product category using the === operator
    // If the product category does not match the filter category, set the match variable to false
    if (category !== "" && product.Category !== category) {
      match = false;
    }

    // Check if the product has the name specified in the filters
    // If the filters.searchQuery is not an empty string, use the includes() method to check if the product name contains the search query
    // If the product name does not contain the search query, set the match variable to false
    if (
      searchQuery !== "" &&
      !product.Name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      match = false;
    }

    // Check if the product has the collection specified in the filters
    // If the filters.collections array is not empty, use the === operator to check if the product collection matches any of the filter collections
    // If the product collection does not match any of the filter collections, set the match variable to false
    if (collections.length > 0 && !collections.includes(product.Collection)) {
      match = false;
    }

    // Check if the product has the type specified in the filters
    // If the filters.productTypes array is not empty, use the === operator to check if the product type matches any of the filter product types
    // If the product type does not match any of the filter product types, set the match variable to false
    if (productTypes.length > 0 && !productTypes.includes(product.Type)) {
      match = false;
    }

    // Check if the product has the price specified in the filters
    // If the filters.priceRange object has both min and max properties, use the >= and <= operators to check if the product price is within the range
    // If the product price is not within the range, set the match variable to false
    if (
      priceRange.min > -1 &&
      priceRange.max > 0 &&
      (product.Price < priceRange.min || product.Price > priceRange.max)
    ) {
      match = false;
    }

    // check if seller is not selected go to next step
    // return only products with selected seller
    if (seller != "" && product.Seller !== seller) {
      match = false;
    }

    // Check if the product has the options specified in the filters
    if (selectedOptions.length > 0 && product.Options) {
      // check product options
      const matchedProducts = product.Options.some(({ title, options }) => {
        // return true if product have selected option
        return selectedOptions.some(
          (option) =>
            option.title === title &&
            options.some((opt) => opt === option.selectedOption)
        );
      });
      // only return product with selected options
      if (!matchedProducts) match = false;
    }

    // If the match variable is still true after checking all the filters, push the product to the filteredProducts array
    if (match) {
      filteredProducts.push(product);
    }
  }

  // Sort the filteredProducts array according to the filters.sortBy property
  // If the filters.sortBy is not an empty string, use the sort() method to sort the array
  // If the filters.sortBy is "high to low", sort the array in descending order of price
  // If the filters.sortBy is "low to high", sort the array in ascending order of price
  // If the filters.sortBy is a tag keyword, sort the array by placing the products with that tag first
  if (filters.sortBy !== "") {
    filteredProducts.sort((a, b) => {
      if (filters.sortBy === "high to low") {
        return b.Price - a.Price;
      } else if (filters.sortBy === "low to high") {
        return a.Price - b.Price;
      } else if (
        a.Tags.includes(filters.sortBy) &&
        !b.Tags.includes(filters.sortBy)
      ) {
        return -1;
      } else if (
        !a.Tags.includes(filters.sortBy) &&
        b.Tags.includes(filters.sortBy)
      ) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  // Return the filteredProducts array
  return filteredProducts;
}
