export type personProps = {
	suspect: {
		_id: string;
		name: string;
		age: number;
		balance: string;
		company: string;
		email: string;
		picture: string | undefined;
	};
};

export type registerPersonProps = {
	_id: string;
	balance: string;
	picture: string | undefined;
	age: number;
	eyeColor: string;
	name: string;
	gender: string;
	company: string;
	email: string;
	phone: string;
	address: string;
	about: string;
	registered: string;
	latitude: number;
	longitude: number;
};

export type detailPersonProps = {
	_id: string;
	name: string;
	age: number;
	balance: string;
	company: string;
	email: string;
	picture: string | undefined;
	eyeColor: string;
	gender: string;
	phone: string;
	address: string;
	about: string;
	registered: string;
	latitude: number;
	longitude: number;
	participants: peopleProps;
}[];

export type participantsProps = {
	participants: peopleProps;
};

export type ProfileProps = {
	person: {
		_id: string;
		name: string;
		age: number;
		balance: string;
		company: string;
		email: string;
		picture: string | undefined;
		eyeColor: string;
		gender: string;
		phone: string;
		address: string;
		about: string;
		registered: string;
		latitude: number;
		longitude: number;
	};
};

export type peopleProps = {
	_id: string;
	name: string;
	age: number;
	balance: string;
	company: string;
	email: string;
	picture: string | undefined;
}[];
