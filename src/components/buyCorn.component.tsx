import { useState } from "react";
import { CornService } from "../services/corn.service";

const BuyCorn = () => {
  const [corn, setCorn] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const cornService = new CornService(import.meta.env.VITE_ENDPOINT_URL);

  const handleBuyCorn = async () => {
    setLoading(true);
    setMessage("");

    try {
      const data = await cornService.buyCorn();
      setCorn(data.totalCorn);
      setMessage("🌽 Compra exitosa");
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Bob’s Corn Shop 🌽</h1>

      <p>Total de maíz: {corn}</p>

      <button
        onClick={handleBuyCorn}
        disabled={loading}
        className="px-4 py-2 bg-yellow-400 rounded disabled:opacity-50"
      >
        {loading ? "Comprando..." : "Comprar maíz"}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default BuyCorn;