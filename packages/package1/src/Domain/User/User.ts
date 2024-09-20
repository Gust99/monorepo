import { UserClass } from "./UserClass";
import { createSignal } from "solid-js";

export function helloUser(user: UserClass) {
    return `Hello ${user.name}`
}

export function reactiveUser(user: UserClass) {
    return createSignal(user)
}