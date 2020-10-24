import React from "react";
import { FiChevronRight } from "react-icons/fi";

import { Form, Title, Repositories } from "./styles";

import logoImg from "../../assets/logo.svg";

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore repositorios no GitHub</Title>

			<Form>
				<input placeholder="Digite o nome do repositório" />

				<button type="submit">Pesquisar</button>
			</Form>

			<Repositories>
				<a href="/teste">
					<img
						src="https://avatars1.githubusercontent.com/u/31319822?s=460&u=e95ebc1c99839c77810d75063539d9dcad2124a9&v=4"
						alt=""
					/>

					<div>
						<strong>maatheusgouveia/texuguito</strong>
						<p>aisdbnasodbasidnbiasldnasl</p>
					</div>
					<FiChevronRight size={20} />
				</a>

				<a href="/teste">
					<img
						src="https://avatars1.githubusercontent.com/u/31319822?s=460&u=e95ebc1c99839c77810d75063539d9dcad2124a9&v=4"
						alt=""
					/>

					<div>
						<strong>maatheusgouveia/texuguito</strong>
						<p>aisdbnasodbasidnbiasldnasl</p>
					</div>
					<FiChevronRight size={20} />
				</a>

				<a href="/teste">
					<img
						src="https://avatars1.githubusercontent.com/u/31319822?s=460&u=e95ebc1c99839c77810d75063539d9dcad2124a9&v=4"
						alt=""
					/>

					<div>
						<strong>maatheusgouveia/texuguito</strong>
						<p>aisdbnasodbasidnbiasldnasl</p>
					</div>
					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
