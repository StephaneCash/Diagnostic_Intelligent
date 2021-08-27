import React, { Component } from 'react'
class ListMaladies extends Component {

    onDelete = () => {
        this.props.onDelete(this.props.maladies.id);
    }

    onEdit = () => {
        this.props.onEdit(this.props.maladies);
        console.log("Données edit", this.props.maladies);
    }

    onViewShowDetail = () =>{
        this.props.onViewShowDetail(this.props.maladies);
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
                        <button className='btn btn-primary bt1' type='submit' onClick={this.onViewShowDetail} title="Détails" >
                            <i className="fa fa-info-circle"></i> 
                        </button>
                        <button type='submit' className='btn btn-success bt2' onClick={this.onEdit} title="Editer">
                            <i className="fa fa-edit"></i> 
                        </button>
                        <button className='btn btn-danger bt3' type='submit' onClick={this.onDelete} title="Supprimer">
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </>
        )
    }
}

export default ListMaladies;

