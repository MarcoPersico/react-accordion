import React from 'react';

// Loader Component
import AccordionLoader from '../AccordionLoader/AccordionLoader';

// Styles
import './AccordionContainer.scss';

/**
 * This class is the AccordionContainer component will manage which 
 * Child is visible and keeping only the child active
 */
class AccordionContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selectedItem: null, isLoading: false };
        this.setSelectedItem = this.setSelectedItem.bind(this);
    }

	/**
	 * This method is a callback that will set the local state 
	 * selectedItem to the active element clicked
	 *
	 * @param   {Number}  value  index from the child selected
	 *
	 */
    setSelectedItem(value) {
        this.setState({ selectedItem: value })
    }

    renderContainer() {
        const ANIMATED = this.props.animated ? 'animated fadeIn' : null;
        const CLASS_CONTAINER = this.props.ownClassName ?
            this.props.containerClassName :
            'accordion-container_default';

        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                onItemClicked: this.setSelectedItem,
                activeItem: this.state.selectedItem,
                animated: this.props.animated,
            });
        });

        if (!this.props.children.length) {
            return (
                <div className='accordion-container_placeholder'>
                    <AccordionLoader />
                </div>
            );
        }
        return (
            <div className={`${CLASS_CONTAINER} ${ANIMATED}`}>
                {children}
            </div>
        );
    }

    render() {
        return (
            this.renderContainer()
        );
    }
}

export default AccordionContainer;