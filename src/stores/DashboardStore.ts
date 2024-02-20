import { writable } from "svelte/store";

// setting store values
const store_brief_info = writable([
    {
        title: "Free Shipping",
        description: "For orders from $50",
        svg_link: "images/sprite.svg#fi-free-delivery-48",
    },
    {
        title: "Support 24/7",
        description: "Call us anytime",
        svg_link: "images/sprite.svg#fi-24-hours-48",
    },
    {
        title: "100% Safety",
        description: "Only secure payments",
        svg_link: "images/sprite.svg#fi-payment-security-48",
    },
    {
        title: "Hot Offers",
        description: "Discounts up to 90%",
        svg_link: "images/sprite.svg#fi-tag-48",
    },
])

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
    store_brief_info,
};