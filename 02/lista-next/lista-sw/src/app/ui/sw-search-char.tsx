'use client'
import axios from 'axios'
import SwChar, { ISwCharProp } from './sw-char';
import { useState } from 'react';

export default function SWSearch(){
    const url = 'https://starwars-databank-server.vercel.app/api/v1/characters/name/';
    const [canDisplay, setCanDisplay] = useState(false);
    const [swChar, setSwChar] = useState<ISwCharProp>({
        name: '',
        description: '',
        image: ''
    });

    const buscaPersonagem = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const input = form.elements.namedItem('sw-name') as HTMLInputElement;
        const nome = input.value || 'aa';
        try {
            const {data} = await axios.get(`${url}${nome}`);
            let newSwChar: ISwCharProp;
            if (data.length === 0){
                newSwChar = {
                    name: 'Luke Cry Walker',
                    description: 'Achou nada!',
                    image: 'https://i.ytimg.com/vi/6E8qiKXNl3U/maxresdefault.jpg'
                }
            } else {
                newSwChar = {
                    name: data[0].name,
                    description: data[0].description,
                    image: data[0].image
                }
            }
            setSwChar(newSwChar);
            setCanDisplay(true);
        } catch (e) {
            setSwChar({
                name: 'Erro',
                description: 'Erro ao buscar personagem',
                image: 'https://i.ytimg.com/vi/6E8qiKXNl3U/maxresdefault.jpg'
            });
            setCanDisplay(true);
        }
    }

    return(
        <section>
            <form onSubmit={buscaPersonagem}>
                <input type="text" name="sw-name" id="sw-name" />
                <label htmlFor="sw-name" aria-hidden = 'true' hidden> Nome do Personagem </label>
                <button type="submit">Buscar</button>
            </form>
            {canDisplay && <SwChar {...swChar} />}
        </section>
    )
}