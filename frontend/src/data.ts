import { Food } from './app/shared/models/food';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'steak',
    price: 20.95,
    cookTime: '40-50',
    favorite: true,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch']
  },
  {
    id: '2',
    name: 'jollof',
    price: 20.95,
    cookTime: '40-60',
    favorite: false,
    origins: ['nigeria'],
    stars: 4.0,
    imageUrl: 'assets/food-2.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch']
  },
  {
    id: '3',
    name: 'scram egg',
    price: 20.95,
    cookTime: '20-35',
    favorite: false,
    origins: ['france'],
    stars: 4.0,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch']
  },
]
