export class PostModel {
  id?: string;
  title: string;
  description: string | null;
  url: string | null;
  authorId: string | null;
  visible?: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    title: string,
    description: string,
    url: string,
    authorId: string,
    id?: string,
    visible?: boolean,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.authorId = authorId;
    this.visible = visible;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
