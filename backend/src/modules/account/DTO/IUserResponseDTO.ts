export interface IUserResponseDTO{
  id: string;
  name: string;
  email: string;
  avatar: string;
  avatar_url(): string;
}