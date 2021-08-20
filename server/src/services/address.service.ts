import AddressRepository from '@/repositories/address.repository';

class AddressService {
  async getAddresses(userId) {
    const addressRepo = AddressRepository();
    return await addressRepo.getAddresses(userId);
  }

  async deleteAddress({ id, userId }) {
    const addressRepo = AddressRepository();
    return await addressRepo.deleteAddress({ id, userId });
  }

  async createAddress({
    name,
    postcode,
    address,
    detail_address,
    phone,
    message,
    user_id,
    is_default,
  }) {
    const addressRepo = AddressRepository();
    return await addressRepo.createAddress({
      name,
      postcode,
      address,
      detail_address,
      phone,
      message,
      user_id,
      is_default,
    });
  }

  async updateAddress({
    id,
    name,
    postcode,
    address,
    detail_address,
    phone,
    message,
    user_id,
    is_default,
  }) {
    const addressRepo = AddressRepository();
    return await addressRepo.updateAddress({
      name,
      postcode,
      address,
      detail_address,
      phone,
      message,
      user_id,
      is_default,
      id,
    });
  }
}

export default new AddressService();
