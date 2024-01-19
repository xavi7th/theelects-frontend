import { writable } from "svelte/store";

const side_menu = writable(
    {
        is_open: true,
    }
)

export {
    side_menu
};