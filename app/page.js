import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "@/app/productDemo.jpeg";
import icon from "@/app/icon.png";
import Link from "next/link";

export default function Home() {
  const isLoggedIn = false;
  const name = "Shriji";

  return (
    <main>
      {/* Header Section */}
      <section className="bg-base-200">
        <div className="flex space-x-3 justify-between items-center px-8 py-2 max-w-6xl mx-auto">
          <div className="font-black ">shrijithakker.com</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-primary" href="#projects">
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
      <section className=" py-32 px-8 text-center lg:text-left max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
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

      {/* projects Section */}
      <section className="bg-base-200" id="projects">
        <div className=" py-32 px-8 max-w-6xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Projects
          </p>
          <h2 className=" text-center text-3xl lg:text-4xl font-extrabold mb-1">
            Seeing ideas through.
          </h2>
          <div className="text-center opacity-90 mb-12">
            Got an idea for a software product? Lets make it happen.
          </div>
          <div className="flex flex-col lg:flex-row mx-auto max-w-full gap-x-6 gap-y-4">
            {/* card one */}
            <div className="card bg-base-100 image-full w-full lg:w-96 shadow-xl">
              <figure>
                <Image src={icon} alt="Shoes" layout="fill" objectFit="cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Jobinhood.co</h2>
                <p>
                  Tailor your resume to a specific job posting before applying!
                </p>
                <div className="card-actions justify-start">
                  <a
                    href="https://jobinhood.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="card bg-base-100 image-full w-full lg:w-96 shadow-xl">
              <figure>
                <Image src={icon} alt="Shoes" layout="fill" objectFit="cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Flashcards</h2>
                <p>
                  Create unlimited flashcard decks and share with your
                  classmates.
                </p>
                <div className="card-actions justify-start">
                  <Link href="/flashcard">
                    <button className="btn btn-primary">Visit</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="card bg-base-100 image-full w-full lg:w-96 shadow-xl">
              <figure>
                <Image src={icon} alt="Shoes" layout="fill" objectFit="cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Future Projects</h2>
                <p>Reach out to collaborate on future projects.</p>
                <div className="card-actions justify-start">
                  <Link href="/flashcard">
                    <button className="btn btn-primary">Visit</button>
                  </Link>
                </div>
              </div>
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
