import React, { Component } from "react";

class CustomerList extends Component {
    render() {
        return(
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{width: "50px", textAlign: "center"}}>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th style={{width: "148px"}}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td>Allan Sousa</td>
                            <td>alnprivado@gmail.com</td>
                            <td>
                                <button className="mini ui blue button">Editar</button>
                                <button className="mini ui red button">Deletar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CustomerList;