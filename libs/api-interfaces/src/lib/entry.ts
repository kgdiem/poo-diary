import { BaseEntry } from './base-entry';

export enum PooColor {
  Black = 'Black',
  Brown = 'Brown',
  White = 'White',
  Green = 'Green',
  Red = 'Red',
  Orange = 'Orange',
  Yellow = 'Yellow'
}

export enum PooType {
  Lumps = 'Seperate lumps',
  Lumpy = 'Sausage like lump',
  Cracked = 'Cracked, solid sausage',
  Smooth = 'Smooth, solid sausage / snake',
  Blobs = 'Seperate, soft blobs',
  Mush = 'Mushy mess',
  Liquid = 'Liquid diarrhea'
}

export const PooColors = [
  PooColor.Black,
  PooColor.Brown,
  PooColor.White,
  PooColor.Green,
  PooColor.Red,
  PooColor.Orange,
  PooColor.Yellow
];

export const PooTypes = [
  PooType.Lumps,
  PooType.Lumpy,
  PooType.Cracked,
  PooType.Smooth,
  PooType.Blobs,
  PooType.Mush,
  PooType.Liquid
];

export interface Entry extends BaseEntry {
  blood: boolean;
  color: PooColor;
  colorAlt?: string;
  constipated: boolean;
  description: string;
  image?: string;
  pain: boolean;
  painScale: number;
  timeTaken: number;
  type: PooType;
}
