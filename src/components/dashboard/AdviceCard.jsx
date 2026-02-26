export default function AdviceCard() {

  const handleClick = () => {
    window.open("https://chat.openai.com", "_blank");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-4 text-center">

      <h2 className="text-lg font-semibold mb-2">
        Advice
      </h2>

      <p className="text-gray-500 text-sm mb-6">
        Click the plant to talk to AI about system problems
      </p>

      <div
        onClick={handleClick}
        className="cursor-pointer inline-block transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <div className="text-6xl animate-bounce">
          🌱
        </div>
      </div>

    </div>
  );
}