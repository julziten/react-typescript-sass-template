import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../../../data";

export default function Invoices() {
  let invoices = getInvoices();
    return (
      <div>
        <nav className='Invoices--Navigation'>
          {invoices.map(invoice => (
            <Link 
              to={`/invoices/${invoice.number}`} 
              key={invoice.number}>
              {invoice.name}
            </Link>
          ))}
        </nav>
        <Outlet />
      </div>
    );
  }