import { BaseEntry } from './base-entry';

export enum PooColor {
  Black = 'Black',
  White = 'White',
  Green = 'Green',
  Red = 'Red',
  Orange = 'Orange',
  Yellow = 'Yellow'
}

export enum PooType {
  Lumps = 'Seperate lumps',
  Lumpy = 'Sausage like lump',
  Cracked = 'Cracked sausage',
  Smooth = 'Smooth sausage / snake',
  Blobs = 'Seperate, soft blobs',
  Mush = 'Mushy mess',
  Liquid = 'Liquid diarrhea'
}

export interface Entry extends BaseEntry {
  blood: boolean;
  color: PooColor;
  colorAlt: string;
  constipated: boolean;
  description: string;
  image: string;
  pain: boolean;
  painScale: number;
  timeTaken: string;
  type: PooType;
}
