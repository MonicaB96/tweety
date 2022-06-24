export async function postApi(path, data) {
  var apiUrl = 'http://localhost:8080/' + path;
  return await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
