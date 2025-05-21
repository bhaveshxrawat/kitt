import { Suspense } from "react";
import SearchForm from "./components/SearchForm";

export default function Home() {
  return (
    <div className="max-w-[75rem] mx-auto px-[4.5rem] pt-[6.625rem]">
      <header className="text-4xl mb-8 text-center">
        Good afternoon, Anon!
      </header>
      <main>
        <Suspense>
          <SearchForm
            cn="py-6 px-7 shadow-md border-[#E6E8EB] border"
            cardHeader={true}
          />
        </Suspense>
      </main>
    </div>
  );
}
