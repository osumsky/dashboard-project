import { User } from '../../properties/schema';

export class UpdateUserDto {
  readonly title: string;
  readonly description: string;
  readonly propertyType: string;
  readonly location: string;
  readonly price: number;
  readonly photo: string;
  readonly creator: User;
}
