

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name } = req.body;
      console.log(`Nome recebido: ${name}`);
      
      
//const teste= "teste";
      
    //se passar sem nenhum erro na verificacao message vai vazia e renderiza o que quiser se nao passa a mensagemn de erro e mostra
      res.status(200).json({ message: `oii` });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  }