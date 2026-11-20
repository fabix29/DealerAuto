import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCar } from "../api.js";
import { FUEL_LABELS } from "../constants.js";
import styles from "./CarDetailPage.module.css";

export default function CarDetailPage() {
  const { id } = useParams(); // text from the URL, for example "3"
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Runs again if the id in the address changes
  useEffect(() => {
    let ignore = false;

    fetchCar(id)
      .then((data) => {
        if (!ignore) {
          setCar(data);
          setError(null); // an error from a previous id is no longer valid
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          The car could not be loaded: {error}
        </p>
        <p>
          <Link to="/">Back to the list</Link>
        </p>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Back to the list
      </Link>
      <h2 className={car.sold ? styles.done : undefined} data-testid="detail-title">
        {car.title}
      </h2>
      <dl className={styles.fields}>
        <dt>Fuel</dt>
        <dd>
          <span className={`badge badge-${car.fuel}`}>
            {FUEL_LABELS[car.fuel]}
          </span>
        </dd>
        <dt>Body type</dt>
        <dd>{car.bodyType ?? "Not set"}</dd>
        <dt>Status</dt>
        <dd>{car.sold ? "Sold" : "Available"}</dd>
        <dt>ID</dt>
        <dd>{car.id}</dd>
      </dl>
    </section>
  );
}