function getUnfollowers(firstArray = [], secondArray = [], arrayCopy = []) {
	arrayCopy = [...secondArray];

	for (let index = 0; index < firstArray.length; index++) {
		for (let index1 = 0; index1 < arrayCopy.length; index1++) {
			if (firstArray[index].login === arrayCopy[index1].login) {
				arrayCopy.splice(index1, 1);
			}
		}
	}

	return arrayCopy;
}

export { getUnfollowers };
