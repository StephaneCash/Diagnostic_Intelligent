import { Button, Modal } from "react-bootstrap";

function ConfirmDialog(props) {
    return (
        <>
            <Button variant="primary" onClick={props.handleShow} hidden>
            </Button>

            <Modal className="confirmDialog" size="sm" animation={false} show={props.show} onHide={props.handleClose}>
                <Modal.Body className=" align-self-center">
                    <div className="confirm">
                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                    </div>
                    <h6 className="confirmMessage">{props.message}</h6>
                    <div className="buttons col-7 m-auto">
                        <div className="d-flex">
                        <div className="cancelButton">
                            <input type="button"
                                text="Annuler"
                                onClick={props.handleClose} />
                        </div>
                        <div className="confirmButton">
                            <input type="button"
                                text="Ok"
                                onClick={(e) => { props.confirmFunction(e); props.handleClose() }}
                                data={`${JSON.stringify(props.data)}`} />
                        </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

function PinDialog(props) {
    return (
        <>
            <Button variant="primary" onClick={props.handleShow} hidden>
            </Button>

            <Modal className="pinDialog" size="sm" animation={false} show={props.show} onHide={props.handleClose}>
                <Modal.Body className=" align-self-center">
                    <div className="pin">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <form>
                        <div className="form-group">
                            <h5 className="pinMessage">{props.message}</h5>
                            <input type="password" className="form-control" id="pin" />
                        </div>
                    </form>
                    <div className="d-flex buttons">
                        <div className="cancelButton">
                            <input type="button"
                                text="Annuler"
                                onClick={props.handleClose} />
                        </div>
                        <div className="confirmButton">
                            <input type="button"
                                text="Valider"
                                onClick={(e) => { props.confirmFunction(e);}}
                                data={`${JSON.stringify(props.data)}`} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

function LoadingDialog(props) {
    return (
        <>
            <Button variant="primary" onClick={props.handleShow} hidden>
            </Button>

            <Modal className="loadingDialog" size="sm" animation={false} show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false}>
                <Modal.Body className=" align-self-center">
                    <div className="loader">
                        <i className="fa fa-spin fa-spinner" aria-hidden="true"></i>
                    </div>
                    <h6 className="loaderMessage">{props.message}</h6>
                </Modal.Body>
            </Modal>
        </>
    )
}

function ErrorDialog(props) {
    return (
        <>
            <Button variant="primary" onClick={props.handleShow} hidden>
            </Button>

            <Modal className="errorDialog" size="sm" animation={false} show={props.show} onHide={props.handleClose}>
                <Modal.Body className=" align-self-center">
                    <div className="error">
                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                    </div>
                    <h6 className="errorMessage">{props.message}</h6>
                    <div className="closeButton">
                        <input type="button"
                            text="Fermer"
                            onClick={props.handleClose} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

function SuccessDialog(props) {
    return (
        <>
            <Button variant="primary" onClick={props.handleShow} hidden>
            </Button>

            <Modal className="successDialog" size="sm" animation={false} show={props.show} onHide={props.handleClose}>
                <Modal.Body className=" align-self-center">
                    <div className="success">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h6 className="successMessage">{props.message}</h6>
                    <div className="closeButton">
                        <input type="button"
                            text="Fermer"
                            onClick={props.handleClose} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}


export { ConfirmDialog, LoadingDialog, ErrorDialog, SuccessDialog,PinDialog };