export type personProps = {
	suspect: {
		_id: string;
		name: string;
		age: number;
		balance: number;
		company: string;
		email: string;
		picture: string;
	};
};

export type registerPersonProps = {
    balance: number;
    picture: string;
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
}

export type detailPersonProps = {
		_id: string;
		name: string;
		age: number;
		balance: number;
		company: string;
		email: string;
		picture: string;
		eyeColor: string;
		gender: string;
		phone: string;
		address: string;
		about: string;
		registered: string;
		latitude: number;
		longitude: number;
		participants: peopleProps;
}[]

export type peopleProps = {
	_id: string;
	name: string;
	age: number;
	balance: number;
	company: string;
	email: string;
	picture: string;
}[];
