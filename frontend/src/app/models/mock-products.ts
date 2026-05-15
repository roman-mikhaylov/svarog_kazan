import { Product } from './product.model';

export const MOCK_PRODUCTS: Product[] = [
  {
    sku: 'R-001',
    roofType: 'Металлочерепица',
    title: 'Крыша «Стандарт»',
    description: 'Базовое решение для частного дома.',
    imageUrl: 'assets/images/roof-standard.jpg',
    price: 150000,
  },
  {
    sku: 'R-002',
    roofType: 'Профнастил',
    title: 'Крыша «Эконом»',
    description: 'Недорогое решение для хозяйственных построек.',
    imageUrl: 'assets/images/roof-econom.jpg',
    price: 90000,
  },
  {
    sku: 'R-003',
    roofType: 'Мягкая кровля',
    title: 'Крыша «Премиум»',
    description: 'Эстетичное решение для коттеджей.',
    imageUrl: 'assets/images/roof-premium.jpg',
    price: 220000,
  },
];