import type { LayoutLoad } from './$types';

export const load = (async () => {
    const profileNavigation = [
        {
            title: "Dashboard",
            link: "/dashboard",
        },
        {
            title: "Edit Profiles",
            link: "/edit-profile",
        },
        {
            title: "Order History",
            link: "/order-history",
        },
        {
            title: "Order Details",
            link: "/order-details",
        },
        {
            title: "Addresses",
            link: "/address",
        },
        {
            title: "Edit Address",
            link: "/edit-address",
        },
        {
            title: "Password",
            link: "/edit-password",
        },
    ]

    return {
        navigation: profileNavigation,
    };
}) satisfies LayoutLoad;