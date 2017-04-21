function ClozeCard(text, cloze) {
	if (!(this instanceof ClozeCard)) return new ClozeCard(text, cloze);

	if (!text.includes(cloze)) {
		console.log('Error: Cloze deletion not found in input text.')
	} 
	else {
		this.fullText = text;
		this.cloze = cloze;
		this.partial = text.replace(cloze, '...');
		this.displayCard = function() {
			console.log(this.partial.replace('...','/' + cloze + '/'))
		};
	};
	
};

module.exports = ClozeCard;