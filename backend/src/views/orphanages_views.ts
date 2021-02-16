import Orphanage from '../models/Orphanages';
import images_views, { ImageInterface } from './images_views';

interface OrphanageInterface {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: ImageInterface[];
}

export default {
  render(orphanage: Orphanage): OrphanageInterface {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: images_views.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphanage[]): OrphanageInterface[] {
    return orphanages.map(orphanage => this.render(orphanage));
  },
};
