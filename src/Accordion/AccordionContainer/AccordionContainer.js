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

    /**
     * This method will render the Container component or the placeholder
     * Accordion if the childrens has not load or the error handling
     *
     * @return  {JSX/React Component}  AccordionContainer's children or AccordionLoader
     */
    renderContainer() {
        const ANIMATED = this.props.animated ? 'animated fadeIn' : null;
        const CLASS_CONTAINER = this.props.defaultStyles ?
            'accordion-container_default' :
            this.props.containerClassName;

        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                onItemClicked: this.setSelectedItem,
                activeItem: this.state.selectedItem,
                animated: this.props.animated,
            });
        });

        if (!this.props.children.length && !this.props.error.status) {
            return (
                <div className='accordion-container_placeholder'>
                    <AccordionLoader />
                </div>
            );
        } else if (this.props.error.status) {
            return (
                <div className='accordion-container_placeholder'>
                    <p className='accordion-container_error'>
                        Oops&nbsp;
                        <span>
                            {this.props.error.message}
                        </span>
                    </p>
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

/**
 * Component Default Props
 */
AccordionContainer.defaultProps = {
    defaultStyles: true,
    containerClassName: null,
    animated: true,
    error: {
        status: false,
        message: null,
    },
}

AccordionContainer.propTpyes = {
    // Children prop is the child element of the component
    children: PropTypes.element.isRequired,

    // Boolean to set or not the default styling
    defaultStyles: PropTypes.bool,

    // Custom styles for container element
    containerClassName: PropTypes.string,

    // Boolean to set or not animations
    animated: PropTypes.bool,

    // Defualt Error handling
    error: PropTypes.shape({
        status: PropTypes.bool,
        message: PropTypes.string,
    }),
}

export default AccordionContainer;

