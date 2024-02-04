import { writable } from "svelte/store";

// setting store values
const featured_product = writable([
    {
        name: "",
        url: "",
        tag: "",
        price: "",
        reviews: 0,
        rading: 0,
        in_stock: false,
    }
])

export {
    featured_product, 
};