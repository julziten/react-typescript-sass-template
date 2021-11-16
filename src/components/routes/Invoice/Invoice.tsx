import { useParams } from "react-router";
import { getInvoice } from "../../../data";

export const Invoice = () => {
    let params = useParams();
    
    console.log('paramsHere', params.invoiceId);

    let invoice = getInvoice(parseInt(params.invoiceId as string, 10));

    return (
        <main style={{ padding: '1rem' }}>
            <h2>Total Due: {invoice?.amount} </h2>
            <p>
                {invoice?.name}: {invoice?.number}
            </p>
            <p>Due Date: {invoice?.due} </p>
        </main>
    )
}
