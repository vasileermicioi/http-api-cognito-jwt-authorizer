let response;
exports.handler = async (event, context) => {
  console.log(event, context);
  try {
    response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      },
      body: JSON.stringify({ path: event.rawPath, headers: event.headers }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
