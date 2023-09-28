import axios from 'axios';

const apiUrl = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&apiKey=cb61428f173bd9dfe46ab55e0eed23fa04c30251eb044150e3e5731135e975fa';

export async function fetchNewsData() {
  try {
    const response = await axios.get(apiUrl);
    return response.data.Data;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error so the component can handle it
  }
}
