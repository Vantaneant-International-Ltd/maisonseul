// The brand book's own alphabet (its last page, "???"). One symbol per letter.
// Lines written in it are left for people to decode; nothing important is
// ever said only in cipher.
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const GLYPH = [...'⏃⏚☊⎅⟒⎎☌⊑⟟⟊☍⌰⋔⋏⍜⌿⍾⍀⌇⏁⎍⎐⍙⌖⊬⋉'];

export function cipher(text: string): string {
	return [...text.toUpperCase()].map((ch) => {
		const i = ALPHA.indexOf(ch);
		return i === -1 ? ch : GLYPH[i];
	}).join('');
}

// The lines, taken from the brand book.
export const LINES = {
	seen: 'Seen by all. Known by one.',
	noRepeats: 'No repeats.',
	weWereHere: 'We were here.',
	oneAtATime: 'One at a time.',
	slowerHands: 'Better cloth. Slower hands.',
	meant: 'If you recognise it, you were meant to.'
} as const;
