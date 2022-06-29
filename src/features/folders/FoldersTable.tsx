import Table from "../utils/Table";

function FoldersTable() {

    const fetchAction = () => { console.log('fetchAction') }

    return (<div>
        <Table fetchAction={fetchAction}>
            <table>
                <thead>
                    <tr>
                        <th>Test</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test</td>
                    </tr>
                </tbody>
            </table>
        </Table>
    </div>)
}

export default FoldersTable
