import { Component } from 'react';

class ListDoctors extends Component {

    onDelete = () => {
        this.props.onDelete(this.props.doctors.id);
    }

    onEdit = () => {
        this.props.onEdit(this.props.doctors);
    }

    render() {
        // Récuperation de données de doctors venant de props
        let doctors = this.props.doctors;
        console.log('doctors listDoctors', doctors)
        return (
            <>
                <tr key={doctors.id}>
                    <td style={{ textAlign: "center" }}>{doctors.id}</td>
                    <td>{doctors.nom} {doctors.postnom} {doctors.prenom}</td>
                    <td>{doctors.specialte}</td>
                    <td>{doctors.adress}</td>
                    <td>
                        <button className='buttonS btn btn bt3' type='submit'>
                            <i className="fa fa-info-circle"></i> Détails
                        </button>
                        <button type='submit' className='btn btn bt1' onClick={this.onEdit}>
                            <i className="fa fa-edit"></i> Modifier
                        </button>
                        <button className='buttonS btn btn bt2' type='submit' onClick={this.onDelete}>
                            <i className="fa fa-trash"></i> Supprimer
                        </button>
                    </td>
                </tr>
            </>
        )
    }
}

export default ListDoctors;