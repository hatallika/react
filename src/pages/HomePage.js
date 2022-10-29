import React, {useEffect, useState} from 'react';
import {db} from "../service/firebase";
import {green} from "@mui/material/colors";

const HomePage = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        db.child('contacts').on("value", (snap) => {
            if(snap.val() !== null) {
                setData({...snap.val()});
            } else {
                setData({});
            }
        })
        return () => {
            setData({})
        }
    }, []);

    const handlerDelete = (id) => {
        db.child('contacts').child(id).remove(a => {
            console.log('Удалено' + id )
        }).then(r => console.log(r))
    }
    return (
        <div>
            <h2>Home Page</h2>
            <h3>Contacts</h3>
            <div style={{marginTop: "50px"}}>
             <table className={"styled-table"}>
                <thead>
                <tr bgcolor={green[600]}>
                    <th style={{textAlign: "center"}}>№</th>
                    <th style={{textAlign: "center"}}>Name</th>
                    <th style={{textAlign: "center"}}>Email</th>
                    <th style={{textAlign: "center"}}>Contact</th>
                    <th style={{textAlign: "center"}}>Action</th>

                </tr>
                </thead>
                <tbody>

                {Object.keys(data).map((id,i) => {
                    return (
                        <tr key={id}>
                            <td>{i+1}</td>
                            <td>{data[id].name}</td>
                            <td>{data[id].email}</td>
                            <td>{data[id].contact}</td>
                            <td><button onClick={()=>handlerDelete(id)}>x</button></td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
            </div>
        </div>
    );
};

export default HomePage;