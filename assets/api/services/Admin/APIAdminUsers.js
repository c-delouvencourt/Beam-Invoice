import BeamAPI from "../../BeamAPI";

export default class APIAdminUsers {

  static create(firstName, name, email, rank, permissions) {
    return BeamAPI.url('/admin/users').parameters({
      firstName,
      name,
      email,
      rank,
      permissions
    }).contentJson().put();
  }

}
