import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Shriji";

  return (
    <main>
      <section className="bg-base-200">
        <div className="flex space-x-3 justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">Shrobro.IO</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-primary">Pricing</a>
            <a className="link link-primary">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
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
    </main>
  );
}
