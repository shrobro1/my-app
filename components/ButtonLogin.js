import Link from "next/link";
const ButtonLogin = ({ isLoggedIn, name }) => {
  // if props is logged in is true, then say [ ]. if not say logged in
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome back {name}
      </Link>
    );
  }
  return <button>Login</button>;
  // if logged in, welcome back. if else, login button. but login button does not have an href to a log in page
};
export default ButtonLogin;
