import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getCars() {
    const cars = await api.get(host + "/data/cars?sortBy=_createdOn%20desc")
    return cars
}

export async function getCarById(carId) {
    const car = await api.get(host + "/data/cars/" + carId)
    return car
}

export async function getUserCars(userId) {
    const cars = await api.get(host + "/data/cars?where=_ownerId%3D%22" + userId + "%22&sortBy=_createdOn%20desc")
    return cars
}

export async function getCarsByYear(year) {
    const cars = await api.get(host + `/data/cars?where=year%3D${year}`)
    return cars
}

export async function createCar(brand, model, description, year, imageUrl, price) {
    const result = await api.post(host + "/data/cars", { brand, model, description, year, imageUrl, price })
    return result
}

export async function editCar(carId, brand, model, description, year, imageUrl, price) {
    const result = await api.put(host + `/data/cars/${carId}`, { brand, model, description, year, imageUrl, price })
    return result
}

export async function deleteCar(carId) {
    const result = await api.del(host + `/data/cars/${carId}`)
    return result
}