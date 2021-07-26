import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CadastrarProduto from './Pages/CadastrarProduto';
import CadastrarUsuario from './Pages/CadastrarUsuario';
import Home from './Pages/Home/index';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/cadastrar-produto' component={CadastrarProduto} />
				<Route path='/cadastrar-usuario' component={CadastrarUsuario} />
			</Switch>
		</BrowserRouter>
	);
}
