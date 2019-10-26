import React from 'react';

// App Config
import AppConfiguration from './services/AppConfiguration';
import frontendConfig from '../../config/frontend/frontend.config';

// Set app config
AppConfiguration.setConfig(frontendConfig);

// Components
import { AccordionContainer, AccordionItem } from './modules/components/Accordion';

// Services
import ApiService from './services/api';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { realAccordionData: [] }
		this.ApiService = new ApiService();
	}

	componentDidMount() {
		setTimeout(() => {
			this.ApiService.getMockedData()
			.then((res) => {
				this.setState({ realAccordionData: res.data });
			})
			.catch((error) => {
				this.setState({ realAccordionData: [error.message] })
			})
		}, 2000)

	}

	renderItems(item, index) {
		return (
			<AccordionItem
				key={item.id}
				index={index}
				value={item.name}
			>
				{item.content.map((element, index) => {
					return <li key={index}>{element.content}</li>
				})}
			</AccordionItem>
		);
	}

	render() {
		return (
			<AccordionContainer animated>
				{this.state.realAccordionData.map(this.renderItems)}
			</AccordionContainer>
		);
	}
}

export default App;