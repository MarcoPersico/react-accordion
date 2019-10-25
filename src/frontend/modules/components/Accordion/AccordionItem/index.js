import React from 'react';

/**
 * This function is the AccordionItem component will render
 * a button and when is clicked the content will of the item
 * will be display
 *
 * @param   {Object}  props  props passed from parent
 *
 * @return  {JSX}
 */
export default function AccordionItem(props) {
	/**
	 * Components' props
	 *
	 * @var  {const}
	 */
	const {
		onItemClicked,
		index,
		value,
		activeItem,
		children,
	} = props;

	/**
	 * This method will render the content when activeItem is equal 
	 * to index
	 *
	 * @return  {JSX}  Content from children of Item component 
	 * 								 (ideally a <li> or <p> elements)
	 */
	const renderContent = () => {
		if (activeItem === index) {
			return (
				<div>
					{children}
				</div>
			);
		}
	}

	return (
		<div>
			<button
				onClick={() => onItemClicked(index)}
			>
				{value}
			</button>
			{renderContent()}
		</div>
	);
}
