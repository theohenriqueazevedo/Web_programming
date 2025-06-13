import { Prosto_One } from "next/font/google";
import Image from "next/image";

//definindo um tipo
export interface ISwCharProp {
    name:string,
    description:string,
    image:string
}

export default function SwChar(props: ISwCharProp){

    return (
        <section>
            <h2>{props.name}</h2>
            {props.image && props.image !== '/placeholder.png' ? (
                <Image
                    src={props.image}
                    alt={`Personagem de Star Wars: ${props.name}`}
                    width={400}
                    height={250}
                    style={{objectFit: 'cover', borderRadius: '8px'}}
                />
            ) : null}
            <p>{props.description}</p>
        </section>
    )
}