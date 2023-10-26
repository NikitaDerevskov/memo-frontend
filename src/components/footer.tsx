/* Because this is my pet project I want to show version */
import { version } from "../../package.json";

export default function Footer() {
  return <h2>Footer {version}</h2>;
}
