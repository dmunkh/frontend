import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Goods = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
   

    return (
        <div>
              
            <h1 className="text-3xl font-bold underline text-red-600">
              Бараа жагсаалт
            </h1>
            {/* <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Credit Limit</td>
                    </tr>
                </thead>
                <tbody>
                    {customerlist &&
                        customerlist.map(item => (
                            <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.creditLimit}</td>
                            </tr>

                        ))
                    }
                </tbody>

            </table> */}
        </div>
    );
}

export default Goods;