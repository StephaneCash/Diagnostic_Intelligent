import React, { Component } from 'react'

class ListMaladies extends Component {

    onDelete = () => {
        this.props.onDelete(this.props.maladies.id);
    }

    onEdit = () => {
        this.props.onEdit(this.props.maladies);
    }

    render() {
        let maladies = this.props.maladies;
        //console.log('Maladies', maladies);
        return (
            <>
                <tr key={maladies.id}>
                    <td style={{ textAlign: "center" }}>{maladies.id}</td>
                    <td>{maladies.nom}</td>
                    <td>{maladies.type}</td>
                    <td>{maladies.symptomes}</td>
                    <td>
                        <button type='submit' className='btn btn-primary bt1' onClick={this.onEdit}>
                            <i className="fa fa-edit"></i> Modifier
                        </button>
                        <button className='buttonS btn btn-danger bt2' type='submit' onClick={this.onDelete}>
                            <i className="fa fa-trash"></i> Supprimer
                        </button>
                    </td>
                </tr>
            </>
        )
    }
}

export default ListMaladies;

