import './NotFoundPage.css';
import { Link } from 'react-router-dom';
import { Button } from '../commons/Button/Button';

export function NotFoundPage() {
  return (
    <>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <Link to="/">
        <Button text="Home" />
      </Link>
    </>
  );
}
