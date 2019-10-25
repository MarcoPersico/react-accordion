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
	}

	/**
	 * This method will render the content when activeItem is equal 
	 * to index
	 *
	 * @return  {JSX}  Content from children of Item component 
	 * 								 (ideally a <li> or <p> elements)
	 */
	renderContent() {
		if (this.props.activeItem === this.props.index) {
			return (
				<div className='accordion-item_default_contentWrapper animated'>
                    <div className='animated fadeIn'>
                        {this.props.children}
                    </div>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='accordion-item_default'>
				<button
                    className='accordion-item_default_button'
					onClick={() => this.props.onItemClicked(this.props.index)}
				>
					{this.props.value}
				</button>
                    {this.renderContent()}
			</div>
		);
	}
}

export default AccordionItem;