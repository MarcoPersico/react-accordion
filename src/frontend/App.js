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
		this.ApiService.getEvents({ id: 1 })
			.then((res) => {
				this.setState({ realAccordionData: res.data });
			})
	}

	renderItems(item, index) {
		return (
			<AccordionItem
				key={item.idEvento}
				index={index}
				value={`${item.nombre} ${item.apellido}`}
			>
				<li>{item.dni}</li>
				<li>{item.mail}</li>
				<li>{item.ciudad}</li>
				<li>{item.alergias}</li>
				<li>{item.enfermedades}</li>
			</AccordionItem>
		);
	}

	render() {
		return (
			<AccordionContainer>
				{this.state.realAccordionData.map(this.renderItems)}
			</AccordionContainer>
		);
	}
}

export default App;