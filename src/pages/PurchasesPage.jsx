import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import PurchaseCard from "../components/Purchases/PurchaseCard";

const PurchasesPage = () => {
  const { purchases, getAllPurchases } = usePurchases();

  useEffect(() => {
    getAllPurchases();
  }, []);

  return (
    <div>
      <h2>Purchases</h2>
      <div>
        {purchases?.map((prod) => (
          <PurchaseCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;
