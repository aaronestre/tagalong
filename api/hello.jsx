export default function handler(request, responsee) {
  const { name = 'World' } = request.query;
  response.status(200).json({
    message: `Hello ${name}!`,
  });
}