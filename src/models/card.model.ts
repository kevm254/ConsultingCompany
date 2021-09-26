export class Card {
  headerText: string;
  bodyText: string;

  constructor(customValues: CustomCardValues) {
    this.headerText = customValues.headerText || '';
    this.bodyText = customValues.bodyText || '';
  }
}

export interface CustomCardValues {
  headerText: string;
  bodyText: string;
}
