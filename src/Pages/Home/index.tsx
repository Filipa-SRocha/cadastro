import { Container, SelectButton } from './style';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<Container>
			<Link to='/cadastrar-produto'>
				<SelectButton>Cadastrar Produto</SelectButton>
			</Link>
			<Link to='/cadastrar-usuario'>
				<SelectButton>Cadastrar Usuário</SelectButton>
			</Link>
		</Container>
	);
}

export default Home;
