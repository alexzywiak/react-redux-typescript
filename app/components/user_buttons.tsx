import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, RootState, Dispatch, returnType } from '../../utils/redux';
import { sendFlashMessage } from '../../actions/user_buttons/actions';

function mapStateToProps<UserButtonsStateProps>(state: RootState) {
    return {};
}

function mapDispatchToProps<UserButtonsDispatchProps>(dispatch: Dispatch) {
    return bindActionCreators({
        sendFlashMessage
    }, dispatch);
}

interface UserButtonsOwnProps {
}

const dispatchGeneric = returnType(mapDispatchToProps);
const stateGeneric = returnType(mapStateToProps);

type UserButtonsDispatchProps = typeof dispatchGeneric;
type UserButtonsStateProps = typeof stateGeneric;
type UserButtonsProps = UserButtonsStateProps & UserButtonsDispatchProps & UserButtonsOwnProps;

class UserButtons extends React.Component<UserButtonsProps, {}> { 

    render() {
        return (
            <div>
                <button onClick={() => {this.props.sendFlashMessage({color: 'green', message: 'Great!'})}}>Good Job!</button>
                <button onClick={() => {this.props.sendFlashMessage({color: 'red', message: 'Oh no...!'})}}>You Blew It!</button>
            </div>
        );
    }
}

export default connect<UserButtonsStateProps, UserButtonsDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(UserButtons);