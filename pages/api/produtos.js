import { useRouter } from 'next/router';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const products = [
            { 
              id: 1, 
              name: 'Product 10', 
              price: '$100', 
              image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq' 
            },
            { 
              id: 2, 
              name: 'Product 2', 
              price: '$200', 
              image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h' 
            },
            { 
              id: 3, 
              name: 'Product 3', 
              price: '$300', 
              image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' 
            },
            { 
              id: 4, 
              name: 'Product 4', 
              price: '$400', 
              image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' 
            },
            { 
              id: 5, 
              name: 'Product 5', 
              price: '$500', 
              image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' 
            },
            { 
              id: 6, 
              name: 'Product 6', 
              price: '$600', 
              image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo' 
            },
            { 
              id: 7, 
              name: 'Product 7', 
              price: '$700', 
              image: 'https://via.placeholder.com/150' 
            }
            // Adicione mais produtos conforme necessário
          ];
          
         
          
      res.status(200).json({products});
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  }