import "./IndeterminateLoader.css";
const IndeterminateLoader = ({ cn }: { cn?: string }) => {
  return (
    <div
      aria-hidden="true"
      className={`indLoader h-1 bg-[#E5EBEB] overflow-clip ${cn}`}
    >
      <hr />
    </div>
  );
};

export default IndeterminateLoader;
