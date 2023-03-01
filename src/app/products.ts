export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description:
      'A spectacular cell phone for lovers of multitasking applications',
  },
  {
    id: 4,
    name: 'iPhone X',
    price: 299,
    description:
      'iPhone X, the future of the smartphone, featuring a revolutionary new design with a stunning all-screen display, wireless charging and an incredible rear camera with dual optical image stabilization',
  },
  {
    id: 5,
    name: 'iPhone 11',
    price: 379,
    description:
      'iPhone 11 features the Apple A13 Bionic chip and a new ultra-wide dual camera system, while iPhone 11 Pro features a new 18-watt fast charger.',
  },
  {
    id: 6,
    name: 'iPhone 12',
    price: 479,
    description:
      'iPhone 12 has a stunning 6.1-inch Super Retina XDR display (1). A Ceramic Shield front, four times more resistant to falls (2). Night mode on all cameras, so you can take amazing photos in low light. Cinema-quality Dolby Vision video recording, editing, and playback. And the powerful A14 Bionic chip.',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
