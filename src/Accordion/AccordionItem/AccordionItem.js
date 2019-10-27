import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './AccordionItem.scss';

/**
 * This function is the AccordionItem component will render
 * a button and when is clicked the content will of the item
 * will be display
 *
 * @param   {Object}  props  props passed from parent
 *
 * @return  {JSX}
 */
class AccordionItem extends React.Component {
	constructor(props) {
		super(props);

		this.header = React.createRef();
	}

	/**
	 * This method will render the content when activeItem is equal 
	 * to index also will set inactive/active class to the header
	 * according if is activeItems is equal or not to index
	 *
	 * @return  {JSX}  Content from children of Item component 
	 * 								 (ideally a <li> or <p> elements)
	 */
	renderContent() {

		const ANIMATED = this.props.animated ? 'animated fadeIn' : null;

		if (this.props.activeItem === this.props.index) {
			this.header.current.classList.remove('inactive');
			this.header.current.classList.add('active');
			return (
				<div>
					{this.props.children}
				</div>
			);
		} else if (this.header.current) {
			this.header.current.classList.remove('active');
			this.header.current.classList.add('inactive');
		}
	}

	render() {
		const CLASS_HEADER = this.props.defaultStyles ?
			'accordion-item_default_header' :
			this.props.headerClassName;
		const ARROW = {
			border: `solid ${this.props.arrowColor}`,
			transition: 'all 0.4s',
			borderWidth: '0 2px 2px 0',
			display: 'inline-block',
			padding: '3px',
			marginLeft: '5px',
			marginBottom: '1px',
		}

		const CLASS_CONTENT = this.props.defaultStyles ?
		'accordion-item_default_contentWrapper' :
		this.props.contentClassName;
		return (
			<div className='accordion-item_default'>
				<button
					className={`${CLASS_HEADER} inactive`}
					onClick={() => this.props.onItemClicked(this.props.index)}
					ref={this.header}
				>
					<span>{this.props.headerLabel}</span>
					<i className={`accordion-item_default_arrow`} style={ARROW} />
				</button>
				<div className={CLASS_CONTENT}>
					{this.renderContent()}
				</div>
			</div>
		);
	}
}

/**
 * Component Default Props
 */
AccordionItem.defaultProps = {
	onItemClicked: () => { },
	activeItem: null,
	defaultStyles: true,
	animated: true,
	headerClassName: null,
	contentClassName: null,
	arrowColor: '#000000',
}

AccordionItem.propTypes = {
	// Index of the component 
	index: PropTypes.number.isRequired,

	// Label for the header of the item
	headerLabel: PropTypes.string.isRequired,

	// Content inside the Item
	children: PropTypes.array.isRequired,

	// Callback function to set active item
	onItemClicked: PropTypes.func,

	// Active Item
	activeItem: PropTypes.number,

	// Boolean to set or not the default styling
	defaultStyles: PropTypes.bool,

	// Boolean to set or not animations
	animated: PropTypes.bool,

	// Custom styles for header element
	headerClassName: PropTypes.string,

	// Custom styles for content panel element
	contentClassName: PropTypes.string,

	// Arrow Icon color
	arrowColor: PropTypes.string,

}

export default AccordionItem;