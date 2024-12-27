import Link from "next/link";
const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  // if props is logged in is true, then say [ ]. if not say logged in
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    );
  }
  return (
    <button
      href="/dashboard"
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
    >
      Get started
    </button>
  );
  // if logged in, welcome back. if else, login button. but login button does not have an href to a log in page
  // create a /login page
  // create a email and password form
  // make post request to api/auth
};
export default ButtonLogin;
