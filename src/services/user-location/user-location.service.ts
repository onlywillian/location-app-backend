import { Injectable } from '@nestjs/common';

interface UserLocation {
  latitude: number;
  longitude: number;
}

@Injectable()
export class UserLocationService {
  private location: number;

  differenceBetweenTwoUsersLocation(
    referenceUser: UserLocation,
    otherUser: UserLocation,
  ) {
    const absoluteLatitudeDifference = Math.abs(
      referenceUser.latitude - otherUser.latitude,
    );
    const absoluteLongitudeDifference = Math.abs(
      referenceUser.longitude - otherUser.longitude,
    );

    const distanceBetweenUsersInKilometers = Math.sqrt(
      absoluteLatitudeDifference ** 2 + absoluteLongitudeDifference ** 2,
    );

    this.location = distanceBetweenUsersInKilometers;

    return this.location;
  }
}
