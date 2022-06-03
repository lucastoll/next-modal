export default function handler(req, res){
    res.status(200).json(
        {
            greetings: 'oi',
            desc: 'esta é minha api feita no next com 9 linhas',
            fim: 'ela só retorna isso mesmo'
        },
    )
}
