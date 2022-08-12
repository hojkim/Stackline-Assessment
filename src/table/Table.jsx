import "./table.css";
import { useState } from "react";
import data from "../data.json";

const Table = () => {
   const [product] = useState(data);
   const [sales] = useState(
      product.map((sale) => {
         return sale.sales;
      })
   );

   return (
      <div className="table-container">
         <table>
            <thead>
               <tr>
                  <th>WEEK ENDING</th>
                  <th>RETAIL SALES</th>
                  <th>WHOLESALE SALES</th>
                  <th>UNITS SOLD</th>
                  <th>RETAILER MARGIN</th>
               </tr>
            </thead>
            <tbody>
               {/* Ideally this dynamic rendering would work, but I am unsure about what I am doing wrong.
               {sales.map((sale) => (
                  <tr>
                     <td>{sale.weekEnding}</td>
                     <td>{sale.retailSales}</td>
                     <td>{sale.wholesaleSales}</td>
                     <td>{sale.unitsSold}</td>
                     <td>{sale.retailerMargin}</td>
                  </tr>
               ))} */}
               {sales.map((sale) => {
                  return [
                     <tr>
                        <td>{sale[0].weekEnding}</td>
                        <td>{sale[0].retailSales}</td>
                        <td>{sale[0].wholesaleSales}</td>
                        <td>{sale[0].unitsSold}</td>
                        <td>{sale[0].retailerMargin}</td>
                     </tr>,
                     <tr>
                        <td>{sale[1].weekEnding}</td>
                        <td>{sale[1].retailSales}</td>
                        <td>{sale[1].wholesaleSales}</td>
                        <td>{sale[1].unitsSold}</td>
                        <td>{sale[1].retailerMargin}</td>
                     </tr>,
                     <tr>
                        <td>{sale[2].weekEnding}</td>
                        <td>{sale[2].retailSales}</td>
                        <td>{sale[2].wholesaleSales}</td>
                        <td>{sale[2].unitsSold}</td>
                        <td>{sale[2].retailerMargin}</td>
                     </tr>,
                     <tr>
                        <td>{sale[3].weekEnding}</td>
                        <td>{sale[3].retailSales}</td>
                        <td>{sale[3].wholesaleSales}</td>
                        <td>{sale[3].unitsSold}</td>
                        <td>{sale[3].retailerMargin}</td>
                     </tr>,
                     <tr>
                        <td>{sale[4].weekEnding}</td>
                        <td>{sale[4].retailSales}</td>
                        <td>{sale[4].wholesaleSales}</td>
                        <td>{sale[4].unitsSold}</td>
                        <td>{sale[4].retailerMargin}</td>
                     </tr>,
                  ];
               })}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
