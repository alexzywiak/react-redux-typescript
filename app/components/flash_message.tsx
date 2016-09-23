import * as React from 'react';
import { connect } from 'react-redux';
import { getFlashMessage } from '../../reducers/flash_message';
import { bindActionCreators, RootState, Dispatch, returnType } from '../../utils/redux';

function mapStateToProps<FlashMessageStateProps>(state: RootState) {
    return {
        flashMessage: getFlashMessage(state)
    };
}

interface FlashMessageOwnProps {
}

const stateGeneric = returnType(mapStateToProps);
type FlashMessageStateProps = typeof stateGeneric;
type FlashMessageProps = FlashMessageStateProps & FlashMessageOwnProps;

class FlashMessage extends React.Component<FlashMessageProps, {}> { 

    render() {
        const { color, message} = this.props.flashMessage.flashMessage;

        return (
            <p style={{color}}>{message}</p>
        );
    }
}

export default connect<FlashMessageStateProps, {}, {}>(mapStateToProps)(FlashMessage);