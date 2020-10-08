let response;
exports.handler = async (event, context) => {
  console.log(event, context);
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({ path: event.rawPath, headers: event.headers }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
