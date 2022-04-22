function KartaPrac(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Opis zadania</th>
                    <th>Nazwa</th>
                    <th>Data</th>
                    <th>Priorytet</th>
                </tr>
            </thead>
            {props.dziennik.map((v, i) => {
                return <tr>
                    <th>{v[0]}</th>
                    <th>{v[1]}</th>
                    <th>{v[2]}</th>
                    <th>{v[3]}</th>
                </tr>
            })}
        </table>
    )
}
export default KartaPrac