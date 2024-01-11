import { writable } from "svelte/store";

// setting store values
const header_nav = writable([
    { 
        id: 1,
        layout: 1,
        name: "Home", 
        url: "javascript;:",
        sub_menu: true,
        sub_menu_list: [
            {
                name: "Home 1",
                url: "javascript;:",
            },
            {
                name: "Home 2",
                url: "javascript;:",
            },
        ], 
    },
    { 
        id: 2,
        layout: 1,
        name: "Shop", 
        url: "javascript;:",
        sub_menu: false,
        sub_menu_list: [
            {
                name: "",
                url: "javascript;:",
            },
        ], 
    },
    { 
        id: 3,
        layout: 1,
        name: "Blog", 
        url: "javascript;:",
        sub_menu: false,
        sub_menu_list: [
            {
                name: "",
                url: "javascript;:",
            },
        ], 
    },
    { 
        id: 4,
        layout: 1,
        name: "Pages", 
        url: "javascript;:",
        sub_menu: false,
        sub_menu_list: [
            {
                name: "",
                url: "javascript;:",
            },
        ], 
    },
])

const header_side_nav = writable([
    { 
        id: 1,
        name: "Headsets", 
        url: "",
        is_grid: true,
        sub_menu: true,
        sub_menu_list: [
            {
                id: 1,
                name: "Ipad",
                url: "javascript;:",
                inner_sub: true,
                layout: 1,
                drop_menu: [
                    {
                        name: "Book",
                        url: "javascript;:"
                    },
                ]
            },
        ], 
    },
    { 
        id: 2,
        name: "Laptop Skins", 
        url: "",
        is_grid: false,
        sub_menu: false,
        sub_menu_list: [
            {
                id: 2,
                name: "",
                url: "javascript;:",
                inner_sub: false,
                layout: 2,
                drop_menu: [
                    {
                        name: "Book",
                        url: "javascript;:"
                    },
                ]
            },
        ], 
    },
])

const header_languages = writable([
    { 
        name: "English", 
        abbreviation: "EN",
        icon: "images/languages/language-1.png",
        icon_subset: "images/languages/language-1.png, images/languages/language-1@2x.png 2x",
        selected: false,
    },
])

const header_currencies = writable([
    { 
        name: "Nigeria Naira",
        country: "Nigeria", 
        abbreviation: "NGN",
        sign: "₦",
        selected: true,
    },
    { 
        name: "US Dollar",
        country: "United State Of America", 
        abbreviation: "USA",
        sign: "$",
        selected: false,
    },
])

const header_account = writable([
    { 
        id: 1,
        name: "Dashboard", 
        url: "javascript;:",
    },
    { 
        id: 2,
        name: "Edit Profile", 
        url: "javascript;:",
    },
    { 
        id: 3,
        name: "Order History", 
        url: "javascript;:",
    },
    { 
        id: 4,
        name: "Addresses", 
        url: "javascript;:",
    },
    { 
        id: 5,
        name: "Password", 
        url: "javascript;:",
    },
])

const header_top_nav = writable([
    { 
        id: 1,
        name: "About us", 
        url: "javascript;:",
    },
    { 
        id: 2,
        name: "Contact", 
        url: "javascript;:",
    },
    { 
        id: 3,
        name: "Store Location", 
        url: "javascript;:",
    },
    { 
        id: 4,
        name: "Track Order", 
        url: "javascript;:",
    },
    { 
        id: 5,
        name: "Blog", 
        url: "javascript;:",
    },
])

export {
    header_nav, 
    header_side_nav, 
    header_languages, 
    header_currencies, 
    header_account, 
    header_top_nav
};