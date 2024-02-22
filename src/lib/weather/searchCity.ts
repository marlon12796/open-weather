'use server';

export const searchCity = async (_prevState: any, formData: FormData) => {
  const cityName = formData.get('city') as string;

  const url = `https://weatherapi-com.p.rapidapi.com/search.json?q=${cityName}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY || '',
      'X-RapidAPI-Host': process.env.API_HOST || '',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return {
      results: result,
    };
  } catch (error) {
    console.error(error);

    return {
      error: true,
      message: 'Something went wrong',
    };
  }
};
