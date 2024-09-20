import { reactiveUser, UserClass } from "../../Domain";

export function Card(props: { name: string }) {
  const [user] = reactiveUser(new UserClass(props.name));

  return <span>{user().name}</span>;
}
