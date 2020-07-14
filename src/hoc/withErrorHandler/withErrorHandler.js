import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxilary/Auxilary"

const withErrorHandler = (WrappedComonent, axios) => {
    return class extends Component {

        state = {
            error: null
        };

        componentWillMount() {
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error:null});
                return request;
            });
            this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            console.log("intercepto ejected : " + this.requestInterceptor +" " + this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            })
        };

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComonent {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;