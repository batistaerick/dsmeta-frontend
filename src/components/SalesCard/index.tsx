import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-toastify/dist/ReactToastify.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import { NotificationButton } from "../NotificationButton";
import "./styles.css";

function SalesCard() {
  const min: Date = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(new Date());
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const start: string = minDate
      .toISOString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");
    const end: string = maxDate
      .toISOString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");
    axios
      .get(`${BASE_URL}/sales/find-between-dates?start=${start}&end=${end}`)
      .then((response) => setSales(response.data.content));
  }, [minDate, maxDate]);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
          />
        </div>
      </div>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales?.map((sale) => {
              return (
                <tr key={sale.id}>
                  <td className="show992">{sale.id}</td>
                  <td className="show576">{sale.date}</td>
                  <td>{sale.name}</td>
                  <td className="show992">{sale.visited}</td>
                  <td className="show992">{sale.deals}</td>
                  <td>R${sale.amount.toFixed(2)}</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <NotificationButton saleId={sale.id} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
