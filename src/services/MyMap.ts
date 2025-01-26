import axios from 'axios';

interface PlacemarkDTO {
  latitude: number;
  longitude: number;
  caption: string;
}

interface Placemark extends PlacemarkDTO {
  id: number;
}

export class MapService {
  private readonly API_URL = 'http://localhost:5000/api/placemarks';

  async getAllPlacemarks(): Promise<Placemark[]> {
    const response = await axios.get<Placemark[]>(this.API_URL);
    return response.data;
  }

  async createPlacemark(placemark: PlacemarkDTO): Promise<Placemark> {
    const response = await axios.post<Placemark>(this.API_URL, placemark);
    return response.data;
  }

  async deletePlacemark(id: number): Promise<void> {
    await axios.delete(`${this.API_URL}/${id}`);
  }
}