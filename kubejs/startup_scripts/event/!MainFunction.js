let RegisterNativeEvents = {
	/**
	 * 
	 * @template T
	 * @param {T} event 
	 * @param {(event: InstanceType<T>) => void} handler 
	 * @returns
	 */
	onEvent: function (event, handler) {
		NativeEvents.onEvent(event, handler)
	}
}