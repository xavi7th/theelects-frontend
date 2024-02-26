import type { LayoutLoad } from './$types';
import { PUBLIC_PHONE_NUMBER } from "$env/static/public"; 

export const load = (async () => {
    const navigation = [
        { 
            id: 1,
            layout: 1,
            name: "Home", 
            url: "/",
            sub_menu: true,
            sub_menu_list: [
                {
                    name: "Home 1",
                    url: "/",
                },
                {
                    name: "Home 2",
                    url: "/",
                },
            ], 
        },
        { 
            id: 2,
            layout: 1,
            name: "Shop", 
            url: "/shop",
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
    ]

    const desktopSideNavigation = [
        { 
            id: 1,
            name: "Headsets", 
            url: "/shop/1",
            is_grid: true,
            sub_menu: true,
            sub_menu_list: [
                {
                    id: 1,
                    name: "Ipad",
                    url: "/shop/1",
                    inner_sub: true,
                    layout: 1,
                    drop_menu: [
                        {
                            name: "Book",
                            url: "/shop/1"
                        },
                    ]
                },
            ], 
        },
        { 
            id: 2,
            name: "Laptop Skins", 
            url: "/shop/1",
            is_grid: false,
            sub_menu: false,
            sub_menu_list: [
                {
                    id: 2,
                    name: "",
                    url: "/shop/1",
                    inner_sub: false,
                    layout: 2,
                    drop_menu: [
                        {
                            name: "Book",
                            url: "/shop/1"
                        },
                    ]
                },
            ], 
        },
    ]

    const languages = [
        { 
            name: "English", 
            abbreviation: "EN",
            icon: "/images/languages/language-1.png",
            icon_subset: "/images/languages/language-1.png, images/languages/language-1@2x.png 2x",
            selected: false,
        },
    ]

    const headerCurrency = [
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
    ]

    const headerAccount = [
        { 
            id: 1,
            name: "Dashboard", 
            url: "/dashboard",
        },
        { 
            id: 2,
            name: "Edit Profile", 
            url: "/edit-profile",
        },
        { 
            id: 3,
            name: "Order History", 
            url: "/order-history",
        },
        { 
            id: 4,
            name: "Addresses", 
            url: "/address",
        },
        { 
            id: 5,
            name: "Password", 
            url: "/edit-password",
        },
    ]

    const topNavigation = [
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
    ]


    return {
        header: {
            navigation: navigation,
            desktopSideNavigation: desktopSideNavigation,
            languages: languages,
            headerCurrency: headerCurrency,
            headerAccount: headerAccount,
            topNavigation: topNavigation,
            phoneNumber: PUBLIC_PHONE_NUMBER,
        },
    };
}) satisfies LayoutLoad;