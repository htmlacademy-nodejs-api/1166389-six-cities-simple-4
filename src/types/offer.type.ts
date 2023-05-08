import { Coordinates } from './coordinates.type.js';
import { House } from '../enums/house.enum.js';
import { Luxury } from '../enums/luxury.enum.js';
import { City } from '../enums/city.enum.js';
import { User } from './user.type.js';

export type Offer = {
  title: string;
  description: string;
  publishDate: Date;
  city: City;
  imagePreview: string;
  housePhotos: string[];
  isPremium: boolean;
  rating: number;
  houseType: House;
  roomAmount: number;
  guestAmount: number;
  price: number;
  luxury: Luxury[];
  user: User;
  commentsAmount: number;
  coordinates: Coordinates;
};

