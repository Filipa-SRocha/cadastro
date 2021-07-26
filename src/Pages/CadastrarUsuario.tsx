import { Link } from 'react-router-dom';
import Header from '../Components/Header';

interface Usuarios {
	numero: number;
	nome: string;
	idade: number;
	email: string;
}

export default function CadastrarUsuario() {
	function handleSubmit(e: any) {
		e.preventDefault();
		const usuario: Usuarios = {
			numero: e.target['numero'].value,
			nome: e.target['nome'].value,
			idade: e.target['idade'].value,
			email: e.target['email'].value,
		};

		localStorage.setItem(usuario.numero.toString(), JSON.stringify(usuario));
	}
	return (
		<>
			<Link to='/'>
				<Header />
			</Link>
			<h1>Cadastro de Usuario</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='numero'>Numero de Cliente: </label>
				<input type='number' id='numero'></input>
				<label htmlFor='nome'>Nome: </label>
				<input type='text' id='nome'></input>
				<label htmlFor='idade'>Idade: </label>
				<input type='number' id='idade'></input>
				<label htmlFor='email'>E-mail: </label>
				<input type='email' id='email'></input>
				<button type='submit'>Cadastrar!</button>
			</form>
		</>
	);
}
