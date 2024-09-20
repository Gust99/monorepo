import { reactiveWorld, WorldClass } from "../../Domain";

export function Button(props: { name: string }) {
  const [world] = reactiveWorld(new WorldClass(props.name));

  return <button>{world().name}</button>;
}
