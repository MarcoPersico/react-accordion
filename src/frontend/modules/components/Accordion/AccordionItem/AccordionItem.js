import React from 'react';

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

		this.arrow = React.createRef();
	}

	/**
	 * This method will render the content when activeItem is equal 
	 * to index
	 *
	 * @return  {JSX}  Content from children of Item component 
	 * 								 (ideally a <li> or <p> elements)
	 */
	renderContent() {
		const CLASS_CONTENT = this.props.ownClassName ?
			this.props.contentClassName :
			'accordion-item_default_contentWrapper';
		const ANIMATED = this.props.animated ? 'animated fadeIn' : null;

		if (this.props.activeItem === this.props.index) {
			this.arrow.current.classList.remove('inactive');
			this.arrow.current.classList.add('active');
			return (
				<div className={CLASS_CONTENT}>
					<div className={ANIMATED}>
						{this.props.children}
					</div>
				</div>
			);
		} else if (this.arrow.current) {
			this.arrow.current.classList.remove('active');
			this.arrow.current.classList.add('inactive');
		}
	}

	render() {
		const CLASS_HEADER = this.props.ownClassName ?
			this.props.headerClassName :
			'accordion-item_default_button';
			
		return (
			<div className='accordion-item_default'>
				<button
					className={CLASS_HEADER}
					onClick={() => this.props.onItemClicked(this.props.index)}
				>
					<span>{this.props.value}</span>
					<i className='inactive' ref={this.arrow} />
				</button>
				{this.renderContent()}
			</div>
		);
	}
}

export default AccordionItem;