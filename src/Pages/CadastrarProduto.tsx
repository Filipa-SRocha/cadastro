import { Link } from 'react-router-dom';
import Header from '../Components/Header';

interface Produtos {
	id: string;
	nome: string;
	quantidade: number;
}

export default function CadastrarProduto() {
	function handleSubmit(e: any) {
		e.preventDefault();
		const produto: Produtos = {
			id: e.target['id'].value,
			nome: e.target['nome'].value,
			quantidade: e.target['quantidade'].value,
		};

		localStorage.setItem('produto-' + produto.id, JSON.stringify(produto));
	}
	return (
		<>
			<Link to='/'>
				<Header />
			</Link>
			<h1>Cadastro de Produto:</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='id'>ID do Produto: </label>
				<input type='text' id='id'></input>
				<label htmlFor='nome'>Nome: </label>
				<input type='text' id='nome'></input>
				<label htmlFor='quantidade'>Quantidade: </label>
				<input type='number' id='quantidade'></input>
				<button type='submit'>Cadastrar!</button>
			</form>
		</>
	);
}
