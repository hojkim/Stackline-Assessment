import "./sales.css";
import graph from "../img/graph.png";
import products from "../data.json";
import Table from "../table/Table";

const Sales = () => {
   return (
      <div className="sales">
         <div className="sales-left">
            <div className="sales-left-info">
               <>
                  {products.map((data) => {
                     return [
                        <img
                           src={data.image}
                           className="product-img"
                           alt="product-img"
                        />,
                        <h3 className="product-title">{data.title}</h3>,
                        <p className="product-subtitle">{data.subtitle}</p>,
                        <div className="product-tags">
                           <div className="product-tag">{data.tags[0]}</div>
                           <div className="product-tag">{data.tags[1]}</div>
                           <div className="product-tag">{data.tags[2]}</div>
                           <div className="product-tag">{data.tags[3]}</div>
                        </div>,
                     ];
                  })}
               </>
            </div>
         </div>
         <div className="sales-right">
            <div className="sales-right-graph">
               <h3 className="graph-title">Retail Sales</h3>
               <img src={graph} className="sales-graph-img" alt="graph"></img>
            </div>
            <div className="sales-right-table">
               <Table />
            </div>
         </div>
      </div>
   );
};

export default Sales;
