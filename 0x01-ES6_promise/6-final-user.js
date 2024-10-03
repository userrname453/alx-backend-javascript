import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // create an array of promises to pass to the Promise.allSettled()
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  // use .allSettled to wait for promises results(success or failure)
  // and then we return the array describing the outcome of each promise
  return Promise.allSettled(promises).then((results) =>
    // map over results
    // eslint-disable-next-line implicit-arrow-linebreak
    results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason),
    })));
}
