import AdminLayout from "../../../components/layouts/AdminLayout";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();

  return (
    <AdminLayout>
      <h1>Order Details</h1>
      <p>Order ID: {id}</p>
    </AdminLayout>
  );
}

export default OrderDetails;