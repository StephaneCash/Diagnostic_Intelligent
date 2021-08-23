import "../css/Connect.css";

const Connect = (props) => {
    console.log(props)
    return (
        <div className='connect'>
            <button className="btn btn-primary ">Inscription</button>
            <button className="btn btn-success bouttonSuccess">Connexion</button>
        </div>
    )
}

export default Connect;