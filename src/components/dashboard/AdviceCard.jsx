export default function AdviceCard(){

  return(
    <div className="bg-white p-6 rounded-xl shadow mt-4">

      <h2 className="text-lg font-semibold mb-2">
        Advice
      </h2>

      <p className="text-gray-500 text-sm mb-4">
        Click below to talk to AI about system problems
      </p>

      <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
        Ask AI
      </button>

    </div>
  );
}