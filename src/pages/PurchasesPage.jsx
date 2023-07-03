import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import PurchaseCard from "../components/Purchases/PurchaseCard";
import "../components/styles/PurchasesPage.css";

const PurchasesPage = () => {
  const { purchases, getAllPurchases } = usePurchases();

  useEffect(() => {
    getAllPurchases();
  }, []);

  return (
    <div className="purchases__content">
      <h2>Purchases</h2>
      <div className="prueba">
        {purchases?.map((prod) => (
          <PurchaseCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;
