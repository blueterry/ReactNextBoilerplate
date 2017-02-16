import React, {Component, PropTypes} from 'react';
import {injectIntl, intlShape} from 'react-intl';

class InputEx extends Component {
    
    render() {
        var {locId, type='text', className='text', refName='', intl} = this.props;        
        switch(type){
            case 'button':
            case 'submit':
                return <input type={type}  value={intl.formatMessage({id:locId})} className={className} />
            default:
                return  <input type={type} ref={refName} placeholder={intl.formatMessage({id:locId})} className={className} />
        }        
    }
}

InputEx.propTypes = {
    locId: PropTypes.any.isRequired,    
    intl: intlShape.isRequired
};

export default injectIntl(InputEx, {withRef: true});
