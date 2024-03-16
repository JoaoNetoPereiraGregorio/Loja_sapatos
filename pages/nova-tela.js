import { useRouter } from 'next/router';

const NovaTela = () => {
  const router = useRouter();
  const { name } = router.query;
 // console.log(`Nome recebido: ${name}`);

  const textoDecodificado = name;

 
  
    
  

  return (
    <div>
      <h1>Nova Tela</h1>
      
      <p>Nome recebidooo: {name}</p>
    </div>
  );
};

export default NovaTela;