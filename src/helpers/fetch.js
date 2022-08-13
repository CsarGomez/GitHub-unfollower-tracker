function fetchPagination(url, page = 1, previousResponse = []) {
	return fetch(`${url}&page=${page}`, {
		headers: {
			Authorization: `token${import.meta.env.VITE_GITHUB_TOKEN}`,
			// 'User-Agent': 'request',
			// Accept: 'application/vnd.github.v3+json',
		},
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.status);
		})
		.then(newResponse => {
			const response = [...previousResponse, ...newResponse];
			if (newResponse.length !== 0) {
				page++;
				return fetchPagination(url, page, response);
			} else {
				return response;
			}
		})
		.catch(error => console.log(error));
}

export { fetchPagination };
