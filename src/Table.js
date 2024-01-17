function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Roll no</th>
                    <th> Name</th>
                    <th>React Js</th>
                    <th>Node Js</th>
                    <th>Python</th>
                    <th>.Net</th>
                    <th>Rubby</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.r_no}</td>
                            <td>{data.name}</td>
                            <td>{data.sub_1}</td>
                            <td>{data.sub_2}</td>
                            <td>{data.sub_3}</td>
                            <td>{data.sub_4}</td>
                            <td>{data.sub_5}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;