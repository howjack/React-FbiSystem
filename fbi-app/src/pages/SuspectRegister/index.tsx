import { useState } from 'react';
import api from '../../api/axios';
import { registerPersonProps } from '../../types/suspects';
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment';
import * as S from './style'

export default function SuspectRegister() {
    const [register, setRegister] = useState<registerPersonProps>({
        _id: '',
        name: 'Phelipe Alves Fagundes',
        age: 23,
        balance: '2000',
        company: 'TopGlass',
        email: 'phelipe@bol.com',
        gender: 'male',
        phone: '9914070700',
        eyeColor: 'brown',
        address: 'Camboriú-SC, Brazil',
        latitude: 456811,
        longitude: 3254700,
        about: 'Thinking bigger today',
        registered: '',
        picture: '',
    });

    function momentDate(){
        return moment().format();
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const uuid = uuidv4().toString();
        const date = momentDate();
        setRegister({...register, _id: uuid, registered: date})
        
        await api.post("/person", register)
            .then((response) => {
                console.log(response);
                console.log(register);
            }).catch((err) => {
                console.error(err);
            })
    }

    function toBase64(image: any) {
        var file = image[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setRegister({...register, picture: reader.result?.toString()})
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }
    }
    return (
        <S.registerContainer onSubmit={handleSubmit}>
            <h3>Registration</h3>
            <S.inputContainer>
                <input
                    type="text"
                    placeholder='Full Name'
                    value={register.name}
                    onChange={(e) => setRegister({ ...register, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder='Age'
                    value={register.age}
                    onChange={(e) => setRegister({ ...register, age: parseFloat(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder='Balance'
                    value={register.balance}
                    onChange={(e) => setRegister({ ...register, balance: e.target.value })}
                />
                <input
                    type="text"
                    placeholder='Company'
                    value={register.company}
                    onChange={(e) => setRegister({ ...register, company: e.target.value })}
                />
                <input
                    type="text"
                    placeholder='Email'
                    value={register.email}
                    onChange={(e) => setRegister({ ...register, email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder='Gender'
                    value={register.gender}
                    onChange={(e) => setRegister({ ...register, gender: e.target.value })}
                />
                <input
                    type="text"
                    placeholder='Phone'
                    value={register.phone}
                    onChange={(e) => setRegister({ ...register, phone: e.target.value })}
                />
                <input
                    type="text"
                    placeholder='Eye Color'
                    value={register.eyeColor}
                    onChange={(e) => setRegister({ ...register, eyeColor: e.target.value })}
                />
                <input
                    type="text"
                    placeholder='Address'
                    value={register.address}
                    onChange={(e) => setRegister({ ...register, address: e.target.value })}
                />
                <input
                    type="number"
                    placeholder='Latitude'
                    value={register.latitude}
                    onChange={(e) => setRegister({ ...register, latitude: parseFloat(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder='Longitude'
                    value={register.longitude}
                    onChange={(e) => setRegister({ ...register, longitude: parseFloat(e.target.value) })}
                />
                <textarea
                    placeholder='About'
                    cols={30}
                    rows={10}
                    value={register.about}
                    onChange={(e) => setRegister({ ...register, about: e.target.value })}
                />
                {/* 
                    registered
                */}
            </S.inputContainer>
            <label htmlFor="file">Enviar Arquivo</label>
            <input
                type="file"
                id='file'
                onChange={(e) => toBase64(e.currentTarget.files)}
            />

            <label htmlFor="submit">Cadastrar</label>
            <input type="submit" id='submit' />
        </S.registerContainer>
    )
}