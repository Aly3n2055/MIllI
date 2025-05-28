import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing form data' }),
    };
  }

  try {
    const formData = JSON.parse(event.body);
    
    // Here you can add additional processing:
    // - Send confirmation emails
    // - Store in database
    // - Trigger notifications
    // - etc.

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Form submission successful',
        data: formData 
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};

export { handler };