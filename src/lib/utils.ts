export function lastElement<T>(arr: T[]): T | undefined {
	if (arr.length === 0) {
		return undefined;
	}

	return arr[arr.length - 1];
}

export function assertPresent<T>(v: T | undefined): T {
	if (v === undefined) {
		throw new Error(`Expected value!`);
	}

	return v;
}
