import Image from '../models/Image';

export interface ImageInterface {
  id: number;
  url: string;
}

export default {
  render(image: Image): ImageInterface {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]): ImageInterface[] {
    return images.map(image => this.render(image));
  },
};
