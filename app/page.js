import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Shriji";

  return (
    <main>
      {/* Header Section */}
      <section className="bg-base-200">
        <div className="flex space-x-3 justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-black uppercase">Shrobro.IO</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-primary">Pricing</a>
            <a className="link link-primary">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className=" py-32 px-8 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect customer feedback to build better products.
        </h1>
        <div className=" opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customer will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>

      {/* Pricing Section */}
      <section className="bg-base-200">
        <div className=" py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Pricing
          </p>
          <h2 className=" text-center text-3xl lg:text-4xl font-extrabold mb-1">
            One price: $49.99
          </h2>
          <div className="text-center opacity-90 mb-12">
            Pay once, unlimited access forever.
          </div>
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$50</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /MONTH
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-primary size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Collect customer feedback
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-primary size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Admin dashboard
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-primary size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                24/7 support
              </li>
            </ul>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
    </main>
  );
}
