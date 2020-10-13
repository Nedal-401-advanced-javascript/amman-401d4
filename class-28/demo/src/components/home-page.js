import React from 'react';
import {If, Then, Else} from './if';
import Modal from './modal';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    toggleModal = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <section>
                <If condition={this.state.open}>
                    <Then>
                        <Modal title="Home Page Modal" close={this.toggleModal}>
                            <div>content of my modal </div>
                        </Modal>
                    </Then>
                    <Else>
                        <button onClick={this.toggleModal}>Open Modal!! </button>
                    </Else>
                </If>
            </section>
        )
    }
}

export default HomePage;