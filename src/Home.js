import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VerticalMenu from './components/menu'

const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
    useEffect(() => {
       

        // let jwttoken = sessionStorage.getItem('jwttoken');
        fetch("https://9xz5rjl8ej.execute-api.us-east-1.amazonaws.com/production/users").then((res) => {
            console.log(res);
            return res.json();
        }).then((resp) => {
            listupdate(resp);
        }).catch((err) => {
            console.log(err.messsage)
        });

    }, []);

    return (
        <div>
               <VerticalMenu />
            <h1 className="text-center">Welcome to Nihira Techiees</h1>
            <h1 className="text-3xl font-bold underline text-red-600">
                Hello world!
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

export default Home;