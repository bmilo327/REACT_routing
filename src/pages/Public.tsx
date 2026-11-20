import { Link } from "react-router";

export default function Public() {
  return (
    <section>
        <h2>Publikus felület</h2>
        <p>Termékek...</p>
        <Link to="/termek/5">5-ös termék</Link>
    </section>
  )
}
