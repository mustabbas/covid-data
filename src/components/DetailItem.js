const DeatilItem = (props) => (
        <div className="card">
        <div className= {`card-body ${props.data.DetailCard}`}>
        <p>{props.data.name}</p>
        <p>{props.data.value} cases</p>
        </div>
        </div>
);

export default DeatilItem;