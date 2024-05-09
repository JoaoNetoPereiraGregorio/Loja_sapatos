import { useRouter } from 'next/router';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: '100',
        image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 2,
        name: 'Product 2',
        price: '200',
        image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 3,
        name: 'Product 3',
        price: '300',
        image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 4,
        name: 'Product 4',
        price: '400',
        image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 5,
        name: 'Product 5',
        price: '500',
        image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 6,
        name: 'Product 6',
        price: '600',
        image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 7,
        name: 'Product 7',
        price: '700',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 8,
        name: 'Product 8',
        price: '800',
        image: 'https://drive.google.com/thumbnail?id=1TnsnbMAdAFnTcnxGbNkyaXf8YWdxzxsq',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 9,
        name: 'Product 9',
        price: '900',
        image: 'https://drive.google.com/thumbnail?id=1qMm9AjKJpYPGDWTyiT8ILFXNUX8OvA1h',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 10,
        name: 'Product 10',
        price: '1000',
        image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 11,
        name: 'Product 11',
        price: '1100',
        image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 12,
        name: 'Product 12',
        price: '1200',
        image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 13,
        name: 'Product 13',
        price: '1300',
        image: 'https://drive.google.com/thumbnail?id=1xhynfWfDZ5qlQk4RDl64O0zQ-gy-wGFo',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 14,
        name: 'Product 14',
        price: '1400',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 15,
        name: 'Product 15',
        price: '1500',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 16,
        name: 'Product 16',
        price: '1600',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 17,
        name: 'Product 17',
        price: '1700',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 18,
        name: 'Product 18',
        price: '1800',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 19,
        name: 'Product 19',
        price: '1900',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 20,
        name: 'Product 20',
        price: '2000',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 21,
        name: 'Product 21',
        price: '2100',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      },
      {
        id: 22,
        name: 'Product 22',
        price: '2200',
        image: 'https://via.placeholder.com/150',
        description: "descrição descrição descrição descrição descrição v v descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição descrição v descrição"
      }
      // Adicione mais produtos conforme necessário
    ];



    res.status(200).json({ products });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}