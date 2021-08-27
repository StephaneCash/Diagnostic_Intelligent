import { Component } from 'react';

class ListDoctors extends Component {

    onDelete = () => {
        this.props.onDelete(this.props.doctors.id);
    }

    onEdit = () => {
        this.props.onEdit(this.props.doctors);
    }

    onViewShowDetail = () => {
        this.props.onViewShowDetail(this.props.doctors);
    }

    render() {
        // Récuperation de données de doctors venant de props
        let doctors = this.props.doctors;
        // console.log('doctors listDoctors', doctors)
        return (
            <>
                <tr key={doctors.id}>
                    <td style={{ textAlign: "center" }}>{doctors.id}</td>
                    <td>{doctors.nom} {doctors.postnom} {doctors.prenom}</td>
                    <td>{doctors.specialte}</td>
                    <td>{doctors.adress}</td>
                    <td>
                        <button className='btn btn-primary bt1' type='submit' onClick={this.onViewShowDetail} >
                            <i className="fa fa-info-circle"></i>
                        </button>
                        <button type='submit' className='btn btn-success bt2' onClick={this.onEdit}>
                            <i className="fa fa-edit"></i> 
                        </button>
                        <button className='btn btn-danger ' type='submit' onClick={this.onDelete}>
                            <i className="fa fa-trash"></i> 
                        </button>
                    </td>
                </tr>
            </>
        )
    }
}

export default ListDoctors;