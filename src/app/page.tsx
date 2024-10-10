import SearchForm from "./components/SearchForm";

export default function Home() {
  return (
    <div className="max-w-[75rem] mx-auto px-[4.5rem] pt-[6.625rem]">
      <header className="text-4xl mb-8 text-center">
        Good afternoon, Brian
      </header>
      <main>
        <SearchForm />
      </main>
    </div>
  );
}
