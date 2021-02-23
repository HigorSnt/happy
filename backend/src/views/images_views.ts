import Image from '../models/Image';

export interface ImageInterface {
  id: number;
  url: string;
}

export default {
  render(image: Image): ImageInterface {
    return {
      id: image.id,
      url: `http://192.168.1.7:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]): ImageInterface[] {
    return images.map(image => this.render(image));
  },
};
