import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Company = () => {
  const usenavigate = useNavigate();
  const [customerlist, listupdate] = useState(null);

  console.log(sessionStorage.getItem("username"));
  const data = [
    {
      name: "Dune",
      author: "Frank Herbert",
      year: "1965",
    },
    {
      name: "Ender's Game",
      author: "Orson Scott Card",
      year: "1985",
    },
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      year: "1979",
    },
    {
      name: "1984",
      author: "George Orwell",
      year: "1949",
    },
    {
      name: "Brave New World",
      author: "Aldous Huxley",
      year: "1932",
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="text-3xl font-bold underline text-red-600">
        Бараа жагсаалт
      </h1>
      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="author" author="author"></Column>
        <Column field="year" header="year"></Column>
      </DataTable>
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
};

export default Company;
