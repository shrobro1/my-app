import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "@/app/productDemo.jpeg";

export default function Home() {
  const isLoggedIn = false;
  const name = "Shriji";

  return (
    <main>
      {/* Header Section */}
      <section className="bg-base-200">
        <div className="flex space-x-3 justify-between items-center px-8 py-2 max-w-5xl mx-auto">
          <div className="font-black ">shrijithakker.com</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-primary" href="#pricing">
              Projects
            </a>
            <a className="link link-primary" href="#FAQ">
              Contact
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className=" py-32 px-8 text-center lg:text-left max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
        <Image
          src={productDemo}
          alt="productDemo"
          className="w-96 rounded-xl"
        />
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Welcome to my website. Check out my projects. Reach out to
            collaborate.
          </h1>
          <div className=" opacity-90 mb-8">
            I can help you launch a website just like this one.
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-base-200" id="pricing">
        <div className=" py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Projects
          </p>
          <h2 className=" text-center text-3xl lg:text-4xl font-extrabold mb-1">
            Seeing ideas through.
          </h2>
          <div className="text-center opacity-90 mb-12">
            Got an idea for a software product? Lets make it happen.
          </div>
          <div className="flex mx-auto max-w-full gap-x-6">
            {/* card one */}
            <div className="p-8 bg-base-100 max-w-full sm:w-96 rounded-3xl mx-auto space-y-6">
              <div className="flex gap-2 items-baseline">
                <div className="text-4xl font-black">Jobinhood.co</div>
              </div>
              <ul className="space-y-2">
                {[
                  "AI Resume assistance",
                  "Tailor your resume to a job posting",
                  "Application tracking",
                ].map((priceItem) => (
                  <li className="flex gap-2 items-center" key={priceItem}>
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
                    {priceItem}
                  </li>
                ))}
              </ul>
              <ButtonLogin
                isLoggedIn={isLoggedIn}
                name={name}
                extraStyle="w-full"
              />
            </div>
            {/* card 2 */}
            <div className="p-8 bg-base-100 max-w-full sm:w-96 rounded-3xl mx-auto space-y-6">
              <div className="flex gap-2 items-baseline">
                <div className="text-4xl font-black">Flashcards</div>
              </div>
              <ul className="space-y-2">
                {[
                  "Create and share flashcard decks.",
                  "Unlimited decks.",
                  "Track learning progress.",
                ].map((priceItem) => (
                  <li className="flex gap-2 items-center" key={priceItem}>
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
                    {priceItem}
                  </li>
                ))}
              </ul>
              <ButtonLogin
                isLoggedIn={isLoggedIn}
                name={name}
                extraStyle="w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-base-100" id="FAQ">
        <div className=" py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            FAQ
          </p>
          <h2 className=" text-center text-3xl lg:text-4xl font-extrabold mb-1">
            Contact Info
          </h2>

          <ul className="max-w-lg mx-auto">
            {[
              { question: "Schedule a consultation", answer: "Lorem Ipsum" },
              { question: "Can I get a refund?", answer: "Lorem Ipsum" },
              { question: "I have another question", answer: "Lorem Ipsum" },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
