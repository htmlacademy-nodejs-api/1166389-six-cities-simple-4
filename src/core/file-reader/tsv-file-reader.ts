import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';
import { House } from '../../enums/house.enum.js';
import { Luxury } from '../../enums/luxury.enum.js';
import { City } from '../../enums/city.enum.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(
        ([
          title,
          description,
          publishDate,
          city,
          imagePreview,
          housePhotos,
          isPremium,
          rating,
          houseType,
          roomAmount,
          guestAmount,
          price,
          luxury,
          name,
          email,
          avatarUrl,
          password,
          isPro,
          commentsAmount,
          latitude,
          longitude
        ]) => ({
          title,
          description,
          publishDate: new Date(publishDate),
          city: city as City,
          imagePreview,
          housePhotos: housePhotos.split(';').map((photo) => photo),
          isPremium: JSON.parse(isPremium),
          rating: Number.parseFloat(rating),
          houseType: houseType as House,
          roomAmount: Number.parseInt(roomAmount, 10),
          guestAmount: Number.parseInt(guestAmount, 10),
          price: Number.parseInt(price, 10),
          luxury: luxury.split(';').map((item) => item as Luxury),
          user: {
            name,
            email,
            avatarUrl,
            password,
            isPro: isPro === 'true',
          },
          commentsAmount: Number(commentsAmount),
          coordinates: {
            latitude: Number.parseFloat(latitude),
            longitude: Number.parseFloat(longitude),
          },
        })
      );
  }
}
