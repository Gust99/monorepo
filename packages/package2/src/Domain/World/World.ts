import { createSignal } from "solid-js";
import { WorldClass } from "./WorldClass";

export function helloWorld(world: WorldClass) {
    return `Hello ${world.name}`
}

export function reactiveWorld(world: WorldClass) {
    return createSignal(world)
}